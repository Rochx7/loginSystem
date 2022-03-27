import React, { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/profile" element={<ProtectedLayout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
