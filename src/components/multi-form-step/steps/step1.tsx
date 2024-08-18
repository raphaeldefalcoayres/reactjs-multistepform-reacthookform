import { FormInput } from '../../form-input'
import { useCustomFormContext } from '../context'

export default function Step1() {
  const { register, errors } = useCustomFormContext()

  return (
    <>
      <h2 className='text-base font-semibold leading-7 text-white'>
        Personal Information
      </h2>
      <p className='mt-1 text-sm leading-6 text-gray-300'>
        Provide your personal details.
      </p>
      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <FormInput
          id='firstName'
          label='First name'
          type='text'
          register={register('firstName')}
          autoComplete='given-name'
          errorMessage={errors.firstName?.message as string}
          className='sm:col-span-3'
        />
        <FormInput
          id='lastName'
          label='Last name'
          type='text'
          register={register('lastName')}
          autoComplete='family-name'
          errorMessage={errors.lastName?.message as string}
          className='sm:col-span-3'
        />
        <FormInput
          id='email'
          label='Email address'
          type='email'
          register={register('email')}
          autoComplete='email'
          className='sm:col-span-4'
          errorMessage={errors.email?.message as string}
        />
      </div>
    </>
  )
}
