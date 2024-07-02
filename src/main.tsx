import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux'
import store from './app/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PrimeReactProvider>
                <App />
            </ PrimeReactProvider>
        </Provider>
    </React.StrictMode>,
)
