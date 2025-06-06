import React, { useState } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Content from './components/content'
import LeftComponent from './todo/components/leftComponent'
import RightComponent from './todo/components/rightComponent'
const App = () => {

  const [songs , setSongs] = useState([])
  const [selectedSong , setSelectedSong] = useState({})

  const [selectedValue , setSelectedValue] = useState({})

  const EditValue = () => {

  }
  return (
    <div className='mainContainer'>
        {/* <Header setSongs={setSongs} />

        <div className='gridBody'>
          <Sidebar selectedSong={selectedSong}  /> 
          <Content songs={songs} setSelectedSong={setSelectedSong} />
        </div> */}

        <LeftComponent selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>

        <RightComponent selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
    </div>
  )
}

export default App
