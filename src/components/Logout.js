import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Logout({setIsAuth}) {
  const navigate = useNavigate()
  const logoutWithGoogle = () => {
    // Googleでログアウト
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate("/login")
    })
  }
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logoutWithGoogle}>Googleでログアウト</button>
    </div>
  )
}
