import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <I18nextProvider i18n={i18n}>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </I18nextProvider>
);
