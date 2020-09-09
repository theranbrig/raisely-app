import React from 'react';
import { motion } from 'framer-motion';

const SuccessModal = ({
  email,
  firstName,
  lastName,
  setProcessComplete,
  setSuccess,
  resetForm,
}) => {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
      <div className='min-h-screen w-full fixed top-0 left-0 flex flex-col z-30 justify-center items-center bg-gray-100'>
        <h1 className='font-extrabold text-3xl mb-4 text-raiselyPurpleDark'>Thanks for registering!</h1>
        <p className='text-lg mb-4'>
          Welcome {firstName} {lastName}. You can now login anytime with {email}.
        </p>
        <button
          className='font-extrabold'
          onClick={() => {
            setSuccess(false);
            resetForm();
            setProcessComplete(true);
          }}>
          <span>CLOSE</span>
          <div className="liquid"></div>
        </button>
      </div>
    </motion.div>
  );
};

export default SuccessModal;
