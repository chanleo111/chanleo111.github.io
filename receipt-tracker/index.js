import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter  as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  rootElement
);