import { FormikHelpers } from 'formik'

interface Values {
  username: string
  password: string
  confirmPassword: string
  email: string
}
export const handleSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
  console.log(values)
  setSubmitting(true)
}
