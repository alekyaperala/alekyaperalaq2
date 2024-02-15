import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './index.css'
import {useParams} from 'react-router-dom'

const Repository = ({setCurrentRoute}) => {
  const [repositories, setRepositories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const {username} = useParams()
  const apiKey = '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'

  console.log('hello', username, 'in repo')

  useEffect(() => {
    console.log('Inside useEffect in Repository component')
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          `https://apis2.ccbp.in/gpv/repos/${username}`,
          {
            params: {api_key: apiKey},
          },
        )
        console.log('hello there', response.data)
        setRepositories(response.data)
        // setInputError(null)
      } catch (e) {
        setError(error)
        // setInputError('Invalid username. Please enter a valid GitHub username.')
        setRepositories(null)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [username])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h2>Repositories</h2>
      <h2>Home</h2>
      <ul>
        {repositories?.length &&
          repositories?.map(repo => <li key={repo.id}>{repo.name}</li>)}
      </ul>
    </div>
  )
}

export default Repository
