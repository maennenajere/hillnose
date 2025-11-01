import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MaintenancePage from './components/MaintenancePage.jsx'
import App from './App.jsx'

const isMaintenanceMode = true

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {isMaintenanceMode ? <MaintenancePage /> : <App />}
    </StrictMode>
)
