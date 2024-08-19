import { Suspense, lazy } from 'react'
import Navigation from './components/navigation'
import { Stepper } from './components/stepper'
import { CustomFormProvider, useCustomFormContext } from './context'

const Step1 = lazy(() => import('./steps/step1'))
const Step2 = lazy(() => import('./steps/step2'))
const Step3 = lazy(() => import('./steps/step3'))

function Steps() {
  const { currentStep } = useCustomFormContext()

  const availableSteps = [<Step1 />, <Step2 />, <Step3 />]

  if (currentStep >= availableSteps.length) return null;

  return availableSteps[currentStep]
}

export default function MultiStepForm() {
  return (
    <CustomFormProvider>
      <section className='absolute inset-0 mx-auto flex flex-col justify-between p-24 lg:max-w-[800px]'>
        <Stepper />
        <form className='mt-12 py-12'>
          <Suspense fallback={<div>Loading...</div>}>
            <Steps />
          </Suspense>
        </form>
        <Navigation />
      </section>
    </CustomFormProvider>
  )
}
