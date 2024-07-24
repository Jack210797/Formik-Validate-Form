import { initialValues } from '../constant/initialValues'
import { validationSchema } from '../constant/validationSchema'
import { handleSubmit } from './formHelpers'

export const useRegistrationForm = () => {
  return {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    validateOnMount: true
  }
}
