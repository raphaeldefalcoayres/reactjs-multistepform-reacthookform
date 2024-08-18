import { Suspense, lazy } from 'react'
import { CustomFormProvider, useCustomFormContext } from './components/context'
import Navigation from './components/navigation'
import { Stepper } from './components/stepper'

const Step1 = lazy(() => import('./steps/step1'))
const Step2 = lazy(() => import('./steps/step2'))
const Step3 = lazy(() => import('./steps/step3'))

function StepRenderer() {
  const { currentStep } = useCustomFormContext()

  switch (currentStep) {
    case 0:
      return <Step1 />
    case 1:
      return <Step2 />
    case 2:
      return <Step3 />
    default:
      return null
  }
}

export default function MultiStepForm() {
  return (
    <CustomFormProvider>
      <section className='absolute inset-0 mx-auto flex flex-col justify-between p-24 lg:max-w-[800px]'>
        <Stepper />

        <form className='mt-12 py-12'>
          <Suspense fallback={<div>Loading...</div>}>
            <StepRenderer />
          </Suspense>
        </form>

        <Navigation />
      </section>
    </CustomFormProvider>
  )
}
