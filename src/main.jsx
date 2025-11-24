import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MaintenancePage from './components/MaintenancePage.jsx'
import './index.css'
import './i18n'
import App from './App.jsx'

const isMaintenanceMode = false;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            {isMaintenanceMode ? <MaintenancePage /> : <App />}
        </BrowserRouter>
    </StrictMode>
)