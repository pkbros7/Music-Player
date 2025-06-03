import React from 'react'
import './styles/header.css'
import axios from 'axios'

const Header = ({setSongs}) => {

    const getSongsByname = async (text) => {
        try {
            const {data} = await axios.get("https://saavn.dev/api/search/songs?query=" + text)

            setSongs(data.data.results);
            
         } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='headerContainer'>
        <img src='https://m.media-amazon.com/images/I/41rlGgMU2tL.png' width='5%' alt='logo' />
        <div>Albums</div>
        <div>Artists</div>
        <div>Suggestions</div>

        <input className='searchInput' placeholder='Search a song' onChange={(element) => getSongsByname(element.target.value)} />
    </div>
  )
}

export default Header
