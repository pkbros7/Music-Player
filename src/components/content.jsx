import React, { useEffect, useState } from "react";
import "./styles/content.css";
import axios from "axios";

const Content = ({ setSelectedSong, songs }) => {
  const [albums, setAlbums] = useState([]);

  const getInitialSongs = async () => {
    try {
      const { data } = await axios.get(
        "https://saavn.dev/api/search/albums?query=a"
      );

      setAlbums(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInitialSongs();
  }, []);
  return (
    <div className="contentHeader">
      {songs?.length
        ? songs?.map((eachSong, eachSongIndex) => {
            return (
              <div className="eachCard" onClick={() => setSelectedSong(eachSong)}>
                <img src={eachSong?.image[1]?.url} alt="Album" />
                <div>
                  {eachSong?.name?.length > 10
                    ? eachSong?.name?.substring(0, 10) + "..."
                    : eachSong?.name}
                </div>
              </div>
            );
          })
        : albums?.map((eachAlbum, eachAlbumIndex) => {
            return (
              <div className="eachCard">
                <img src={eachAlbum?.image[1]?.url} alt="Album" />
                <div>
                  {eachAlbum?.name?.length > 10
                    ? eachAlbum?.name?.substring(0, 10) + "..."
                    : eachAlbum?.name}
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Content;
