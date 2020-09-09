import React, { useContext, useEffect, useState } from 'react';

import ProcessComplete from './ProcessComplete';
import SuccessModal from './SuccessModal';

const Form = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [processComplete, setProcessComplete] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const baseRoute = 'https://api.raisely.com/v3/';

  const resetForm = () => {
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  };

  const postRequest = (route, jsonData) => {
    return fetch(`${baseRoute}${route}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
        data: {
          ...jsonData,
        },
      }),
    });
  };

  const emailValidation = async (e) => {
    e.preventDefault();
    await postRequest('check-user', { email }).then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        if (data.errors.length) {
          setError(data.errors[0].message);
        } else {
          setError(`${response.status} Error: Please try again`);
        }
        return Promise.reject(error);
      }
      const { status } = data.data;
      if (status === 'EXISTS') {
        setError('Oops. An account with this email is already in use.');
      } else {
        console.log('A OK');
        submitFormData();
      }
    });
  };

  const submitFormData = async (e) => {
    const jsonData = { email, firstName, lastName, password };
    console.log(jsonData);
    postRequest('signup', jsonData).then(async (response) => {
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        console.log(data.errors);
        if (data.errors.length) {
          setError(data.errors[0].message);
        } else {
          setError(`${response.status} Error: Please try again`);
        }
        return Promise.reject(error);
      }
      setSuccess(true);
    });
  };

  return (
    <>
      <form className='w-11/12 lg:w-1/2 flex flex-col mx-auto' onSubmit={emailValidation}>
        <div className='relative'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input
            className='form-input'
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder=' '
          />
        </div>
        <div className='relative'>
          <label className='form-label' htmlFor='firstname'>
            First Name
          </label>
          <input
            className='form-input'
            id='firstname'
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            minLength='3'
            required
            placeholder=' '
          />
        </div>
        <div className='relative'>
          <label className='form-label' htmlFor='lastname'>
            Last Name
          </label>
          <input
            className='form-input'
            id='lastname'
            type='text'
            value={lastName}
            minLength='3'
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder=' '
          />
        </div>
        <div className='relative'>
          <label className='form-label' htmlFor='email'>
            Password
          </label>
          <input
            className='form-input'
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength='8'
            required
            placeholder=' '
          />
        </div>
        <button
          disabled={!firstName || !lastName || !email || !password}
          className='btn'
          type='submit'>
          Send
        </button>
      </form>
      {error ? <p>{error}</p> : null}
      {success ? (
        <SuccessModal
          email={email}
          firstName={firstName}
          lastName={lastName}
          setProcessComplete={setProcessComplete}
          setSuccess={setSuccess}
          resetForm={resetForm}
        />
      ) : null}
      {processComplete ? <ProcessComplete setProcessComplete={setProcessComplete} /> : null}
    </>
  );
};

export default Form;

// #281364
