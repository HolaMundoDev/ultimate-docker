import { useState, useEffect } from 'react'
import './App.css'
import logo from '/logo.png'

function App() {
  // alert(`${import.meta.env.VITE_API_URL}/games`)
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value

    fetch(`${import.meta.env.VITE_API_URL}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name })
    })
      .then(response => response.json())
      .then(_id => setGames(x => [...x, { _id, name }]))
      .then(() => e.target.name.value = "")
  }
  const [games, setGames] = useState([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/games`)
      .then((response) => response.json())
      .then((data) => setGames(data))
  }, [])
  return (
    <div>
      <header>
        <img src={logo} className='logo' />
        <h2>Games</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" />
      </form>
      <ul className='game-list'>
        {games.map(game =>
          <li key={game._id}>{game.name}</li>)}
      </ul>
    </div>
  )
}

export default App
