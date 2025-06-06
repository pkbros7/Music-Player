import React, { useEffect, useState } from "react";
import contentStyles from "./styles/content.module.scss";
import axios from "axios";
import { DeleteFilled, SettingOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./styles/antdContent.css";

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
    <div className={`${contentStyles.contentHeader} ${contentStyles.name2}`}>
      <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
      {songs?.length
        ? songs?.map((eachSong, eachSongIndex) => {
            return (
              <div
                className={contentStyles.eachCard}
                onClick={() => setSelectedSong(eachSong)}
              >
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
