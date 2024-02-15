import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './index.css'

const Analysis = ({username, onChangeRoute}) => {
  const [analysisDetails, setAnalysisDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchAnalysisDetails = async () => {
    try {
      const response = await axios.get(
        `https://apis2.ccbp.in/gpv/profile-summary/${username}`,
      )
      setAnalysisDetails(response.data)
      setLoading(false)
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnalysisDetails()
  }, [username])

  const handleRetry = () => {
    setLoading(true)
    setError(null)
    fetchAnalysisDetails()
  }

  if (loading) {
    return <div>Loading analysis details...</div>
  }

  if (error) {
    return (
      <div>
        Failed to fetch analysis details.{' '}
        <button onClick={handleRetry}>Retry</button>
      </div>
    )
  }

  if (!analysisDetails) {
    return <div>No analysis details found.</div>
  }

  return (
    <div>
      <h2>Analysis Details</h2>
      <p>Some analysis details here</p>
      {/* Render analysis details here */}
    </div>
  )
}

export default Analysis
