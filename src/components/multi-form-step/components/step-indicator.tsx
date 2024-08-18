interface StepIndicatorProps {
  id: string
  name: string
  isActive: boolean
  isComplete: boolean
}

export function StepIndicator({
  id,
  name,
  isActive,
  isComplete
}: StepIndicatorProps) {
  const baseClasses =
    'group flex w-full flex-col border-l-4 py-2 pl-4 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0 transition-colors'
  const activeClasses = 'border-blue-600 text-blue-600'
  const completeClasses = 'border-blue-600 text-blue-600'
  const futureClasses = 'border-gray-200 text-gray-500'

  const classes = isComplete
    ? `${baseClasses} ${completeClasses}`
    : isActive
      ? `${baseClasses} ${activeClasses}`
      : `${baseClasses} ${futureClasses}`

  return (
    <div className={classes} aria-current={isActive ? 'step' : undefined}>
      <span className='text-lg font-medium'>{id}</span>
      <span className='text-sm font-medium'>{name}</span>
    </div>
  )
}
