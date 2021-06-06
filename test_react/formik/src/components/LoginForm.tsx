import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { IUser } from '../types'
import './LoginForm.scss'

const initialValues: IUser = {
  email: '',
  password: '',
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email address')
    .required('Please enter email'),
  password: Yup.string().required('Please enter password'),
})

interface LoginFormProps {
  onSubmit: (values: IUser) => any
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const handleSubmit = (values: IUser) => onSubmit(values)
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => {
        return (
          <Form className="form">
            <p>
              <span className="label">Email:</span>
              <Field name="email" placeholder="Enter email" />
              <small>
                <ErrorMessage name="email" />
              </small>
            </p>
            <p>
              <span className="label">Password:</span>
              <Field
                name="password"
                placeholder="Enter password"
                type="password"
              />
              <small>
                <ErrorMessage name="password" />
              </small>
            </p>
            <p>
              <button type="submit">submit</button>
            </p>
          </Form>
        )
      }}
    </Formik>
  )
}
