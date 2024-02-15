import {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Repository from './components/Repository'
import './App.css'

const App = () => {
  console.log('FF')
  const [username, setUsername] = useState('')
  console.log('hello', username, 'in app')
  return (
    <div className="bg">
      <BrowserRouter>
        <Header username={username} />
        <Routes>
          <Route
            path="/"
            element={<Home username={username} setUsername={setUsername} />}
          />
          <Route
            path="/repository/:username"
            element={
              <Repository username={username} setUsername={setUsername} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
