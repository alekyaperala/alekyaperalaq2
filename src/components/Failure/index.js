import React from 'react'
import './index.css'

const Failure = ({onTryAgain, errorMessage}) => (
  <div className="failure-container">
    <p className="failure-message">{errorMessage}</p>
    <button className="try-again-button" onClick={onTryAgain}>
      Try Again
    </button>
  </div>
)

export default Failure
