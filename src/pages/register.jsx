import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({      
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('required').min(6,'atleast 6 characters'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },

  });

  return (
    <Container fluid className='vh-100 bg-light' >
      <div className="vstack mx-auto p-4" style={{ width: "20rem" }}>
        <h1 className="display-6">Impace Influencers</h1>
        <p className='fs-5 fw-semibold'>Sign in to your account</p>
        <Card border='light' style={{ width: "20rem" }}>
          <Card.Body className='p-0'>
            <Form onSubmit={formik.handleSubmit} className='vstack gap-3'>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email} />
              </Form.Group>

              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container >
  );
};

export default Register;
