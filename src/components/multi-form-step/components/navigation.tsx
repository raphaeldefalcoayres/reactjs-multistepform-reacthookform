import { useCustomFormContext } from './context'

export default function Navigation() {
  const { currentStep, goToNextStep, goToPreviousStep, steps } =
    useCustomFormContext()

  return (
    <div className='mt-8 pt-5'>
      <div className='flex justify-between'>
        <button
          type='button'
          onClick={goToPreviousStep}
          disabled={currentStep === 0}
          className='flex items-center gap-1 rounded-lg bg-slate-900 py-2 px-3 text-sm font-semibold text-blue-900 ring-1 shadow-sm ring-inset hover:bg-slate-500 disabled:cursor-not-allowed disabled:opacity-50'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
          Back
        </button>
        <button
          type='button'
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
          className='ring-none flex items-center gap-1 rounded-lg border-none bg-slate-900 py-2 px-3 text-sm font-semibold text-blue-900 ring-1 shadow-sm ring-inset hover:bg-slate-400 disabled:cursor-not-allowed disabled:opacity-50'
        >
          Next
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
