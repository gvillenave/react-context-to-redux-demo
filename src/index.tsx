import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactApp from './react-context/App';
import ReduxApp from './redux-toolkit/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="root-container">
      <div className="root-column">
        <header>
          <h1>React Context</h1>
        </header>
        <ReactApp />
      </div>
      <div className="root-column">
        <header>
          <h1>Redux Toolkit</h1>
        </header>
        <ReduxApp />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
