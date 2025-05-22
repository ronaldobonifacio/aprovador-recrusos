import React from 'react';
import ReactDOM from 'react-dom/client';
import ResourceList from './components/ResourceList';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResourceList />
  </React.StrictMode>
);