import React, {useState} from 'react'
import axios from 'axios'
import {FaSearch, FaGithub} from 'react-icons/fa'
import {MdLocationOn, MdLink} from 'react-icons/md'
import {useNavigate, Link} from 'react-router-dom'
import Loader from '../Loader'
import './index.css'

function Home({username, setUsername}) {
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)
  const [inputError, setInputError] = useState(null)

  const apiKey = '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'
  const navigate = useNavigate()

  const fetchUserProfile = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://apis2.ccbp.in/gpv/profile-details/${username}`,
        {
          params: {api_key: apiKey},
        },
      )
      setUserData(response.data)
      setUsername(response.data.login)
      setInputError(null)
      setError(null) // Clear error if request is successful
    } catch (e) {
      setError('Invalid username. Please enter a valid GitHub username.')
      setUserData(null)
    }
    setLoading(false)
  }

  const handleSearch = () => {
    if (username.trim() !== '') {
      fetchUserProfile()
      setUsername('')
    } else {
      setInputError('Please enter a valid GitHub username')
    }
  }

  const handleTryAgain = () => {
    fetchUserProfile() // Retry making the HTTP GET request
  }

  return (
    <div className="bg">
      <input
        className="searchbar"
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        aria-label="Enter GitHub username"
      />
      <button onClick={handleSearch} aria-label="Search">
        <FaSearch />
      </button>
      {inputError && <p>{inputError}</p>}
      <h1>
        <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
          GitHub Profile Visualizer
        </Link>
      </h1>
      {loading && <Loader />}
      {userData && (
        <div>
          <img
            src={userData.avatar_url}
            alt="Avatar"
            style={{borderRadius: '50%'}}
          />
          <h5>{userData.login}</h5>
          <p>BIO</p>
          <div className="bg2">
            <div className="rowitem">
              <div>
                <p className="p1">FOLLOWERS</p>
                <h5 className="h1">{userData.followers}</h5>
              </div>
              <div>
                <p className="p1">FOLLOWING</p>
                <h5 className="h1">{userData.following}</h5>
              </div>
              <div>
                <p className="p1">PUBLIC REPOS</p>
                <h5 className="h1">{userData.public_repos}</h5>
              </div>
            </div>
            <div className="rowitem">
              <div>
                <p className="p1">Company</p>
                <FaGithub /> <h5 className="h1">{userData.company}</h5>
              </div>
              <div>
                <p className="p1">Blog</p>
                <MdLink /> <h5 className="h1">{userData.blog}</h5>
              </div>
              <div>
                <p className="p1">Location</p>
                <h5 className="h1">{userData.location}</h5>
                <MdLocationOn />
              </div>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div>
          <p>Something went wrong. Please try again</p>
          <button onClick={handleTryAgain}>Try Again</button>
        </div>
      )}
    </div>
  )
}

export default Home
