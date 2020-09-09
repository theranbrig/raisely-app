import React from 'react';

const ProcessComplete = ({ setProcessComplete }) => {
  return (
    <div className='min-h-screen w-full fixed top-0 left-0 flex flex-col z-30 justify-center items-center bg-gray-100'>
      <h1 className='font-extrabold text-2xl lg:text-3xl mb-4 text-raiselyPurpleDark'>Learn more about this project and Theran Brigowatz.</h1>
      <a
        className='mb-4 font-extrabold'
        href='https://github.com/theranbrig/raisely-app'
        target='_blank'
        rel='noopener noreferrer'>
        <span>Project Source Code</span>
        <div className="liquid"></div>
      </a>
      <a
        className='mb-4 font-extrabold'
        href='https://theran.dev'
        target='_blank'
        rel='noopener noreferrer'>
        <span>Portfolio</span>
        <div className="liquid"></div>
      </a>
      <a
        className='mb-4 font-extrabold'
        href='https://github.com/theranbrig'
        target='_blank'
        rel='noopener noreferrer'>
        <span>GitHub</span>
        <div className="liquid"></div>
      </a>
      <a
        className='mb-4 font-extrabold'
        href='https://linkedin.com/in/theran-brigowatz'
        target='_blank'
        rel='noopener noreferrer'>
        <span>LinkedIn</span>
        <div className="liquid"></div>
      </a>
      <button onClick={() => setProcessComplete(false)}>Back To Empty Form</button>
    </div>
  );
};

export default ProcessComplete;
