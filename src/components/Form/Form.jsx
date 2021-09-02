import React, { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { SelectField } from '../SelectField';
import { InputField } from '../InputField';

const FormikForm = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    type: Yup.string().required('Required'),
  });

  const typeOptions = [
    { value: 'programmer', label: 'Programmer' },
    { value: 'end-devices', label: 'End-Devices' },
  ];

  const valuess = () => console.log('ref', formRef.current.values);

  const formRef = useRef();

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          type: '',
        }}
        validationSchema={SignupSchema}
        innerRef={formRef}
        onSubmit={(values) => {
          // same shape as initial values
          valuess();
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="d-flex flex-column align-items-center">
            <Field
              placeholder="First Name"
              component={InputField}
              name="firstName"
            />
            <div style={{ color: 'red ' }}>{errors.firstName}</div>
            <Field
              placeholder="Last Name"
              component={InputField}
              name="lastName"
            />
            <div style={{ color: 'red ' }}>{errors.lastName}</div>
            <Field
              placeholder="Email"
              component={InputField}
              name="email"
              type="email"
            />
            {errors.email && touched.email ? (
              <div style={{ color: 'red ' }}>{errors.email}</div>
            ) : null}
            <Field
              name="type"
              placeholder="Select Type"
              component={SelectField}
              options={typeOptions}
            />
            <div style={{ color: 'red ' }}>{errors.type}</div>
            <button className="btn btn-primary mt-3" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
