import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const NoData = ({route, changeRoute, fetchData}) => {
  const handleRefresh = () => {
    fetchData()
  }

  return (
    <div className="no-data">
      <p>No Data Found</p>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  )
}

NoData.propTypes = {
  route: PropTypes.string.isRequired,
  changeRoute: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
}

export default NoData
