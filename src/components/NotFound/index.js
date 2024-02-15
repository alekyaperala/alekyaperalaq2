// NotFound.js

import React from 'react'
import './index.css'

const NotFound = ({changeRoute}) => {
  const handleClick = () => {
    changeRoute('/')
  }

  return (
    <div className="not-found-container">
      <h2>Page Not Found</h2>
      <img src="https://www.figma.com/file/9LiB5x6qaZ7EskY8tcAZSe/Github-Profile-Visualizer?type=design&node-id=2361-424&mode=design&t=qUIhkSkbWV6u8Xfh-4" />
      <button onClick={handleClick}>Go Home</button>
    </div>
  )
}

export default NotFound
