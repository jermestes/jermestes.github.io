import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ✅ Get the DOM element
const container = document.getElementById('root');

// ✅ Create the root and render App into it
const root = ReactDOM.createRoot(container);
root.render(
  <Router>
    <App />
  </Router>
);

// Optional: service worker
serviceWorker.unregister();
