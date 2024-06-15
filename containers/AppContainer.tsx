// containers/AppContainer.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Router } from '../router';

const AppContainer: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default AppContainer;
