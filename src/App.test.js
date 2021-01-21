import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// AlertProvider needs to wrap App in order to work; therefore must be included in test
it('renders without crashing', () => {
  const div = document.createElement('div');
  console.log('ATTENTION!! This App uses react-alert, meaning App.test.js will look different to account for the implementation of this package.')
  ReactDOM.render(  <AlertProvider template={AlertTemplate}>
    <App />
  </AlertProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
