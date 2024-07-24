import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Formik } from 'formik'

import { Button } from 'react-bootstrap'
import InputField from './InputField'
import { useRegistrationForm } from '../helpers/useRegistrationForm'
import { memo } from 'react'

const RegistrationForm = () => {
  const formikProps = useRegistrationForm()
  return (
    <Formik {...formikProps}>
      {({ isSubmitting, errors, touched, isValid }) => (
        <Form className="container">
          <InputField
            name="username"
            placeholder="Enter your username"
            label="Login"
            errors={errors}
            touched={touched}
          />

          <InputField
            name="password"
            type="password"
            placeholder="Enter your password"
            label="Password"
            errors={errors}
            touched={touched}
          />

          <InputField
            name="confirmPassword"
            type="password"
            placeholder="Enter your password again"
            label="Confirm Password"
            errors={errors}
            touched={touched}
          />

          <InputField
            name="email"
            type="email"
            placeholder="Enter your email"
            label="Email"
            errors={errors}
            touched={touched}
          />

          <Button type="submit" variant="primary" className="w-50" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm

export const MemoizedComponent = memo(RegistrationForm)
