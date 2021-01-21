import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'



const Root = () => (
  <AlertProvider template={AlertTemplate}>
    <App />
  </AlertProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
