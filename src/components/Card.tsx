interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={`rounded-2xl border border-gray-100 bg-white/95 shadow-md transition-all duration-300 dark:border-gray-700 dark:bg-gray-800/95 ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
