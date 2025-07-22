import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StudentProvider } from './context/context.jsx'

createRoot(document.getElementById('root')).render(
    <StudentProvider>
    <App />
    </StudentProvider>
    // Part 2 
    // starting time at 3:10
)
