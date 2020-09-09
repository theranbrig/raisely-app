import React, { useContext, useEffect, useState } from 'react';

const SuccessModal = ({
  email,
  firstName,
  lastName,
  setProcessComplete,
  setSuccess,
  resetForm,
}) => {
  return (
    <div>
      <button
        onClick={() => {
          setSuccess(false);
          resetForm();
          setProcessComplete(true);
        }}>
        &times
      </button>
      <h1>Thanks for registering!</h1>
      <p>
        Welcome {firstName} {lastName}. You can no login anytime with {email}
      </p>
    </div>
  );
};

export default SuccessModal;
