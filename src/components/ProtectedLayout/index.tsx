import { Button } from 'antd'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider/useAuth'

export const ProtectedLayout = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const redirectLogin = () =>
    setTimeout(() => {
      navigate('/login')
    }, 3000)

  const [isAuth, setIsAuth] = useState(true)

  useEffect(() => {
    if (!auth.email) {
      setIsAuth(false)
      redirectLogin()
    }
  }, [auth, localStorage])

  const logoutUser = () => {
    localStorage.removeItem('u')
    redirectLogin()
  }

  return (
    <>
      {isAuth ? (
        <>
          <h2>Olá esse é o componente profile!</h2>
          <Button
            type="primary"
            style={{ background: 'red', border: 'none' }}
            htmlType="button"
            onClick={() => logoutUser()}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <h1>You don't have access</h1>
        </>
      )}
    </>
  )
}
