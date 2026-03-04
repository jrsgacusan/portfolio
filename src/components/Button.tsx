import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg' | 'iconSm' | 'icon' | 'iconLg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button. */
  variant?: ButtonVariant
  /** Size; use icon* for icon-only buttons. */
  size?: ButtonSize
  /** Full width (e.g. form submit). */
  fullWidth?: boolean
  /** Optional icon or element before the label. */
  leftIcon?: React.ReactNode
  /** Optional icon or element after the label. */
  rightIcon?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white shadow hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-500',
  secondary:
    'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 focus:ring-gray-500',
  ghost:
    'text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-gray-800 dark:hover:text-primary-400 focus:ring-primary-500',
  danger:
    'bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 focus:ring-red-500',
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm font-medium rounded-lg',
  md: 'px-6 py-2.5 text-base font-semibold rounded-lg',
  lg: 'px-8 py-3 text-base font-semibold rounded-xl',
  iconSm: 'h-9 w-9 p-0 rounded-lg inline-flex items-center justify-center',
  icon: 'h-10 w-10 p-2 rounded-lg inline-flex items-center justify-center',
  iconLg: 'h-14 w-14 p-0 rounded-full inline-flex items-center justify-center sm:h-16 sm:w-16',
}

const BASE_CLASSES =
  'cursor-pointer inline-flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none dark:focus:ring-offset-gray-900 [&_svg]:shrink-0'

const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  type = 'button',
  disabled = false,
  ...rest
}: ButtonProps) => {
  const isIconOnly = size.startsWith('icon')
  const variantClasses = VARIANT_CLASSES[variant]
  const sizeClasses = SIZE_CLASSES[size]

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${BASE_CLASSES} ${variantClasses} ${sizeClasses} ${
        fullWidth ? 'w-full' : ''
      } ${className}`.trim()}
      {...rest}
    >
      {leftIcon && !isIconOnly ? <span aria-hidden="true">{leftIcon}</span> : null}
      {children}
      {rightIcon && !isIconOnly ? <span aria-hidden="true">{rightIcon}</span> : null}
    </button>
  )
}

export default Button
export type { ButtonProps, ButtonVariant, ButtonSize }
