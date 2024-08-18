import { UseFormRegister } from 'react-hook-form'

interface FormSelectProps {
  id: string
  label: string
  register: ReturnType<UseFormRegister<any>>
  options: string[]
  autoComplete?: string
  errorMessage?: string
  className?: string
}

export function FormSelect({
  id,
  label,
  register,
  options,
  autoComplete,
  errorMessage,
  className = ''
}: FormSelectProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={id}
        className='block text-sm font-medium leading-6 text-white'
      >
        {label}
      </label>
      <div className='mt-2'>
        <select
          id={id}
          {...register}
          autoComplete={autoComplete}
          className={`block w-full rounded-lg border-0 py-3 px-4 text-white ring-1 shadow-sm ring-gray-300 ring-inset placeholder:text-gray-100 focus:ring-2 focus:ring-blue-600 focus:ring-inset sm:text-sm sm:leading-6 ${className}`}
        >
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errorMessage && (
          <p className='mt-2 text-sm text-red-400'>{errorMessage}</p>
        )}
      </div>
    </div>
  )
}
