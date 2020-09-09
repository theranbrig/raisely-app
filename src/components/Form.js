import React, { useState } from 'react';

import ProcessComplete from './ProcessComplete';
import SuccessModal from './SuccessModal';

const Form = () => {
  const [loading, setLoading] = useState(false);
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
    setError(null);
    setLoading(true);
    await postRequest('check-user', { email }).then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        if (data.errors.length) {
          setError(data.errors[0].detail);
        } else {
          setError(`${response.status} Error: Please try again`);
        }
        setLoading(false);
        return Promise.reject(error);
      }
      const { status } = data.data;
      if (status === 'EXISTS') {
        setLoading(false);
        setError('Oops. An account with this email is already in use.');
      } else {
        submitFormData();
      }
    });
  };

  const submitFormData = async (e) => {
    const jsonData = { email, firstName, lastName, password };
    postRequest('signup', jsonData).then(async (response) => {
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        if (data.errors.length) {
          setError(data.errors[0].message);
        } else {
          setError(`${response.status} Error: Please try again`);
        }
        setLoading(false);
        return Promise.reject(error);
      }
      setSuccess(true);
      setLoading(false);
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
        <div className='relative mb-8'>
          <label className='form-label' htmlFor='password'>
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
          disabled={loading || !firstName || !lastName || !email || !password}
          className='btn'
          type='submit'
          href='#'>
          {loading ? 'REGISTERING...' : 'REGISTER'}
        </button>
        {error ? <p className='w-full bg-red-200 mt-12 p-8 text-lg'>{error}</p> : null}
      </form>
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
      <button className='mt-8' onClick={() => setProcessComplete(true)}>
        Learn more about Theran Brigowatz
      </button>
    </>
  );
};

export default Form;
