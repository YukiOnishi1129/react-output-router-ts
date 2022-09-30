import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoProvider } from './contexts/TodoContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <div></div>
    </TodoProvider>
  </React.StrictMode>
);
