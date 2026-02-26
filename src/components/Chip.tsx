interface ChipProps {
  children: React.ReactNode
  variant?: 'neutral' | 'primary'
  className?: string
}

const CHIP_VARIANTS: Record<NonNullable<ChipProps['variant']>, string> = {
  neutral: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  primary:
    'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
}

const Chip = ({ children, variant = 'neutral', className = '' }: ChipProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${CHIP_VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Chip
