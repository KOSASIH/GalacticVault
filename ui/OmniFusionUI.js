import React from 'react';
import { render } from 'react-dom';
import App from './App';

const OmniFusionUI = () => {
  return (
    <div>
      <App />
    </div>
  );
};

render(<OmniFusionUI />, document.getElementById('root'));
