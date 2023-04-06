'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { register, login } from '../lib/api';
import TextInput from './TextInputs';

const registerContent = {
  linkurl: '/register',
  linkText: 'Already have an account? Sign in here.',
  header: 'Register a new account (in beta mode)',
  subheader: 'Just a few things to get started.',
  buttonText: 'Register'
}

const signinContent = {
  linkurl: '/login',
  linkText: `Don't have an account? Register here.`,
  header: 'Sign in to your account',
  subheader: 'Welcome back!',
  buttonText: 'Sign in'
}

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: ''
};

// Input: Mode: Text String that's either 'register' or 'login' depending on the page we're at:
// Input: onAuth: Function that runs when we successfully register or login. Undecided on Location.
// Output: Form that has the appropriate fields for the page we're on.
const AuthForm = ({ mode, onAuth }) => {
  const [formState, setFormState] = useState({...initialState});
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleSubmit = async (e) => {
      e.preventDefault();

      const { email, password, firstName, lastName } = formState;
      const { error } = mode === 'register' ? await register({ email, password, firstName, lastName }) : await login({ email, password });
      if (error) {
        console.log('what is error', error)
        setErrors({ email: error.message });
      } else {
        router.push('/');
      }

    setFormState(initialState);
  }

  const content = mode === 'register' ? registerContent : signinContent;

  const outDivStyle = "border-2 border-black flex flex-col justify-center";

  return (
      <div className="m-auto p-3">
        <h1>{content.header}</h1>
        <p>{content.subheader}</p>
        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <div>
              <TextInput label="First Name" type="text" value={formState.firstName} onChange={(e) => setFormState({ ...formState, firstName: e.target.value })} />
              <TextInput label="Last Name" type="text" value={formState.lastName} onChange={(e) => setFormState({ ...formState, lastName: e.target.value })} />
            </div>
          )}
          <TextInput label="Email" type="email" value={formState.email} placeholder="email" onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
          <TextInput label="Password" type="password" value={formState.password} placeholder="password" onChange={(e) => setFormState({ ...formState, password: e.target.value })} />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {content.buttonText}
          </button>
        </form>
      </div>
  )
}

export default AuthForm;
