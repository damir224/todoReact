import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSagaAC } from '../redux/user/actions.js';

export default function Signup() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeted, setPasswordRepeted] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password === passwordRepeted) {
      dispatch(authSagaAC(email, password, 'signup'));
    } else {
      throw 'error';
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full max-w-md'>
        <form
          className='bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4'
          onSubmit={onSubmitHandler}
        >
          <div className='text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4'>
            Register
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-normal mb-2'
              htmlFor='username'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='email'
              v-model='form.email'
              type='email'
              required
              autoFocus
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-normal mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              v-model='form.password'
              type='password'
              placeholder='Password'
              name='password'
              required
              autoComplete='current-password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-normal mb-2'
              htmlFor='password'
            >
              Password again
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              v-model='form.password'
              type='password'
              placeholder='Repeate your password'
              name='passwordRepeted'
              required
              onChange={(e) => setPasswordRepeted(e.target.value)}
              value={passwordRepeted}
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700'
              type='submit'
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
