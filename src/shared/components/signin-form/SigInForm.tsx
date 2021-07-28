import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { setAuthData } from '../../../utils/functions';
import { SigInFromWrapper } from './styles';

export const SignInForm = () => {
  const [formData, setFormData] = useState({ userName: '', password: '' });
  const [invalid, setInvalid] = useState(false);
  const history = useHistory();
  const setUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, userName: e.target.value });
  }
  const setPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    if(formData.userName === 'Test' && formData.password === '123456789') {
      setAuthData(formData);
      history.replace('/profile');
    } else {
      setInvalid(true);
    }
  };

  return (
    <SigInFromWrapper>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter User Name" value={formData.userName} onChange={setUserName} isInvalid={invalid} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={setPassword} value={formData.password} isInvalid={invalid}/>
          <Form.Control.Feedback type="invalid">
          User name or password entered incorrectly.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary" disabled={!formData.userName || !formData.password}>
          Signin
        </Button>
      </Form>
    </SigInFromWrapper>
  )
}