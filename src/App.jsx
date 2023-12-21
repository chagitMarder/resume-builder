import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Resume from './pages/resume'
import ResumeForm from './components/ResumeForm'
import { Provider } from './context/cvContext'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from './AppRouters'

function App() {
  

  return (
    <Provider>
      <BrowserRouter>
      <AppRouters />
      </BrowserRouter>
    </Provider>
  )
}

export default App
