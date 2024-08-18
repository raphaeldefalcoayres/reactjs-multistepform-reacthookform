import { StepIndicator } from './step-indicator'

interface StepProps {
  id: string
  name: string
  index: number
  currentStep: number
  onClick: () => void
  className?: string
}

export function Step({
  id,
  name,
  index,
  currentStep,
  onClick,
  className = ''
}: StepProps) {
  const isActive = currentStep === index
  const isComplete = currentStep > index

  return (
    <li className={`md:flex-1 ${className}`}>
      <div onClick={onClick}>
        <StepIndicator
          id={id}
          name={name}
          isActive={isActive}
          isComplete={isComplete}
        />
      </div>
    </li>
  )
}
