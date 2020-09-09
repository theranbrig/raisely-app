import './assets/main.css';

import Form from './components/Form';
import React from 'react';

function App() {
  return (
    <div className='App flex flex-col items-center justify-center min-h-screen text-center'>
      <h1 className='font-extrabold text-3xl mb-12'>Theran Brigowatz Raisely Application Form</h1>
      <Form />
    </div>
  );
}

export default App;
