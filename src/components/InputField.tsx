import { ErrorMessage, Field, FieldProps } from 'formik'
import SuccessMessage from './SuccessMessage'
import { ChangeEvent } from 'react'

interface ForikFieldState {
  [key: string]: boolean | string
}

interface InputFieldProps {
  name: string
  type?: string
  placeholder: string
  label: string
  errors: ForikFieldState
  touched: ForikFieldState
}

const InputField = ({ name, type = 'text', placeholder, label, errors, touched }: InputFieldProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field name={name}>
        {({ field, form }: FieldProps) => {
          const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            form.setFieldTouched(name, true, false).catch((error) => {
              console.log(error)
            })
            field.onChange(e)
          }
          return (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`form-control ${
                touched[name] && errors[name] ? 'is-invalid' : touched[name] && !errors[name] ? 'is-valid' : ''
              }`}
              onChange={handleChange}
            />
          )
        }}
      </Field>
      {touched[name] && errors[name] ? (
        <ErrorMessage name={name} component="div" className="invalid-feedback" />
      ) : (
        <SuccessMessage name={name} />
      )}
    </div>
  )
}

export default InputField
