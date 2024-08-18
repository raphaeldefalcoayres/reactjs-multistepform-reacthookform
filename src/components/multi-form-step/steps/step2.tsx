import { useCustomFormContext } from '../components/context'
import { FormInput } from '../components/form-input'
import { FormSelect } from '../components/form-select'

export default function Step2() {
  const { register, errors } = useCustomFormContext()

  return (
    <>
      <h2 className='text-base font-semibold leading-7 text-white'>Address</h2>
      <p className='mt-1 text-sm leading-6 text-gray-300'>
        Address where you can receive mail.
      </p>

      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <FormSelect
          id='country'
          label='Country'
          register={register('country')}
          options={['United States', 'Canada', 'Mexico']}
          autoComplete='country-name'
          errorMessage={errors.country?.message as string}
          className='sm:col-span-3'
        />

        <FormInput
          id='street'
          label='Street address'
          type='text'
          register={register('street')}
          autoComplete='street-address'
          errorMessage={errors.street?.message as string}
          className='col-span-full'
        />

        <FormInput
          id='city'
          label='City'
          type='text'
          register={register('city')}
          autoComplete='address-level2'
          errorMessage={errors.city?.message as string}
          className='sm:col-span-2 sm:col-start-1'
        />

        <FormInput
          id='state'
          label='State / Province'
          type='text'
          register={register('state')}
          autoComplete='address-level1'
          errorMessage={errors.state?.message as string}
          className='sm:col-span-2'
        />

        <FormInput
          id='zip'
          label='ZIP / Postal code'
          type='text'
          register={register('zip')}
          autoComplete='postal-code'
          errorMessage={errors.zip?.message as string}
          className='sm:col-span-2'
        />
      </div>
    </>
  )
}
