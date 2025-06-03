import React from 'react'
import './styles/sidebar.css'


const Sidebar = ({selectedSong}) => {
    console.log(selectedSong);
    
  return (
    <div className='sidebarContainer'>
      <img src={selectedSong?.image?.[1]?.url} width='100%' />

      <audio src={selectedSong?.downloadUrl?.[2]?.url} controls={true} autoPlay />
    </div>
  )
}

export default Sidebar
