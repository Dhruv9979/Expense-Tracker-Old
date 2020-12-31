import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './context/context';

ReactDOM.render(
    <React.StrictMode>
        <SpeechProvider
            appId="992c75a1-32ca-4179-b98f-45b3b251362f"
            language="en-US"
        >
            <Provider>
                <App />
            </Provider>
        </SpeechProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
