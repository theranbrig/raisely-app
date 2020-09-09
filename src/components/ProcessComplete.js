import React, { useContext, useEffect, useState } from 'react';

const ProcessComplete = ({ setProcessComplete }) => {
  return (
    <div>
      <h1>Learn more:</h1>
      <a
        className='success-link'
        href='https://github.com/theranbrig/raisely-app'
        target='_blank'
        rel='noopener noreferrer'>
        Project Source Code
      </a>
      <a
        className='success-link'
        href='https://theran.dev'
        target='_blank'
        rel='noopener noreferrer'>
        Portfolio
      </a>
      <a
        className='success-link'
        href='https://github.com/theranbrig'
        target='_blank'
        rel='noopener noreferrer'>
        Github
      </a>
      <a
        className='success-link'
        href='https://linkedin.com/in/theran-brigowatz'
        target='_blank'
        rel='noopener noreferrer'>
        LinkedIn
      </a>
      <button onClick={() => setProcessComplete(false)}>Back To Empty Form</button>
    </div>
  );
};

export default ProcessComplete;
