import React from 'react'
import PropTypes from 'prop-types'
import './RepositoryItem.css'
import './index.css'

const RepositoryItem = ({repository, onItemClick}) => {
  const handleItemClick = () => {
    onItemClick(repository.name)
  }

  return (
    <div className="repository-item" onClick={handleItemClick}>
      <h3 className="repository-name">{repository.name}</h3>
      <p className="repository-stars">Stars: {repository.stars}</p>
    </div>
  )
}

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
}

export default RepositoryItem
