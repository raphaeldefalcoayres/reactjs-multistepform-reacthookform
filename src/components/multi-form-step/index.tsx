import { Suspense, lazy } from 'react'
import { CustomFormProvider, useCustomFormContext } from './components/context'
import Navigation from './components/navigation'
import { Stepper } from './components/stepper'

const Step1 = lazy(() => import('./steps/step1'))
const Step2 = lazy(() => import('./steps/step2'))
const Step3 = lazy(() => import('./steps/step3'))

function Steps() {
  const { currentStep } = useCustomFormContext()

  return (
    <>
      {currentStep === 0 && <Step1 />}
      {currentStep === 1 && <Step2 />}
      {currentStep === 2 && <Step3 />}
    </>
  )
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
