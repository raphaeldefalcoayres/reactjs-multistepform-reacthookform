import { zodResolver } from '@hookform/resolvers/zod'
import { createContext, useContext, useState } from 'react'
import { SubmitHandler, useForm, UseFormRegister } from 'react-hook-form'
import { z } from 'zod'
import { FormDataSchema } from '../schema'

type Inputs = z.infer<typeof FormDataSchema>

interface FormContextProps {
  steps: { id: string; name: string; fields?: (keyof Inputs)[] }[]
  previousStep: number
  currentStep: number
  setPreviousStep: (step: number) => void
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  register: UseFormRegister<Inputs>
  handleSubmit: ReturnType<typeof useForm<Inputs>>['handleSubmit']
  watch: ReturnType<typeof useForm<Inputs>>['watch']
  reset: ReturnType<typeof useForm<Inputs>>['reset']
  trigger: ReturnType<typeof useForm<Inputs>>['trigger']
  errors: ReturnType<typeof useForm<Inputs>>['formState']['errors']
  processForm: SubmitHandler<Inputs>
  goToNextStep: () => Promise<void>
  goToPreviousStep: () => void
}

const FormContext = createContext<FormContextProps | undefined>(undefined)

export const useCustomFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useCustomFormContext must be used within a FormProvider')
  }
  return context
}

export const CustomFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'all',
    resolver: zodResolver(FormDataSchema)
  })

  const steps: FormContextProps['steps'] = [
    {
      id: 'Step 1',
      name: 'Personal Information',
      fields: ['firstName', 'lastName', 'email']
    },
    {
      id: 'Step 2',
      name: 'Address',
      fields: ['country', 'state', 'city', 'street', 'zip']
    },
    { id: 'Step 3', name: 'Complete' }
  ]

  const processForm: SubmitHandler<Inputs> = data => {
    console.log(data)
    reset()
  }

  const goToNextStep = async () => {
    const fields = steps[currentStep].fields
    const output = await trigger(fields, { shouldFocus: true })

    if (!output) return

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        setCurrentStep(step => step + 1)
        await handleSubmit(processForm)()
      } else {
        setPreviousStep(currentStep)
        setCurrentStep(step => step + 1)
      }
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep(step => step - 1)
    }
  }

  return (
    <FormContext.Provider
      value={{
        steps,
        previousStep,
        currentStep,
        setPreviousStep,
        setCurrentStep,
        register,
        handleSubmit,
        watch,
        reset,
        trigger,
        errors,
        processForm,
        goToNextStep,
        goToPreviousStep
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
