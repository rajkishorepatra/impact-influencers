import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

export default function InfluencerProfile() {
    const { currentUser,logOut } = UserAuth();
    const navigate = useNavigate();
    async function handleLogOut(){
        await logOut();
        navigate('/login');
    }

  return (
    <div>
        <h1>Influencer Profile</h1>
        <h2>Email: {currentUser && currentUser.email}</h2>
        <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}
