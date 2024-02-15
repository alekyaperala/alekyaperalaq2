import React, {useState, useRef, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Header = ({username, setCurrentRoute, onUsernameChange}) => {
  const navigate = useNavigate()
  console.log(username, 'in header')
  return (
    <>
      <div className="headerb">
        <div className="header-container">
          <div>
            <h2>Github Profile Visualizer</h2>
          </div>
          <div className="header-navigation">
            <h4 onClick={() => navigate('/')}>Home</h4>
            <h4 onClick={() => navigate(`/repository/${username}`)}>
              Repository
            </h4>
            <h4>Analysis</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
