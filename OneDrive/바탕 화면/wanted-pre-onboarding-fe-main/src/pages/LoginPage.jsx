import React, { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import Sections from '../components/Sections';

export default function LoginPage() {
  return (
    <Sections>
      <LoginForm />
    </Sections>
  );
}
