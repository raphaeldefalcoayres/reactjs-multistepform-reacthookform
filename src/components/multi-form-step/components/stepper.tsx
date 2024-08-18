import { useCustomFormContext } from './context'
import { Step } from './step'

export function Stepper() {
  const { steps, currentStep, setCurrentStep, trigger } = useCustomFormContext()

  const handleStepClick = async (targetStep: number) => {
    if (targetStep === currentStep) {
      return
    }

    if (targetStep < currentStep) {
      setCurrentStep(targetStep)
      return
    }

    const fields = steps[currentStep].fields
    const isValid = await trigger(fields as any, { shouldFocus: true })

    if (isValid) {
      setCurrentStep(targetStep)
    }
  }

  return (
    <nav aria-label='Progress'>
      <ol role='list' className='space-y-4 md:flex md:space-y-0 md:space-x-8'>
        {steps.map((step, index) => {
          return (
            <Step
              key={step.name}
              id={step.id}
              name={step.name}
              index={index}
              currentStep={currentStep}
              onClick={() => handleStepClick(index)}
            />
          )
        })}
      </ol>
    </nav>
  )
}
