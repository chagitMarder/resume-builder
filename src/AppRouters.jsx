import React from 'react'
import ResumeForm from './components/ResumeForm'
import { Routes, Route } from 'react-router-dom'
import Resume from './pages/Resume'
import Home from './pages/Home'
import ResumesList from './pages/ResumesList'


export default function AppRouters() {
    return (
        <div>
            <Routes>
                <Route path='/edit' element={<ResumeForm />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/list' element={<ResumesList />} />

                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}
