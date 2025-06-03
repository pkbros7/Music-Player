import React, { useState } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Content from './components/content'
const App = () => {

  const [songs , setSongs] = useState([])
  const [selectedSong , setSelectedSong] = useState({})

  return (
    <div className='mainContainer'>
        <Header setSongs={setSongs} />

        <div className='gridBody'>
          <Sidebar selectedSong={selectedSong}  /> 
          <Content songs={songs} setSelectedSong={setSelectedSong} />
        </div>
    </div>
  )
}

export default App
