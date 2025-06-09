import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import LeftComponent from "./todo/components/leftComponent";
import RightComponent from "./todo/components/rightComponent";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./redux/slices/userSlice";
const App = () => {
  const dispatch = useDispatch();

  const inputValues = useSelector((state) => state.user.singleUser)

  console.log(inputValues);
  
  // const [songs , setSongs] = useState([])
  // const [selectedSong , setSelectedSong] = useState({})

  // const [selectedValue , setSelectedValue] = useState({})

  // const EditValue = () => {

  // }
  return (
    <div className="mainContainers">
      {/* <Header setSongs={setSongs} />

        <div className='gridBody'>
          <Sidebar selectedSong={selectedSong}  /> 
          <Content songs={songs} setSelectedSong={setSelectedSong} />
        </div> */}

      {/* <LeftComponent selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>

        <RightComponent selectedValue={selectedValue} setSelectedValue={setSelectedValue} /> */}

      <input
        name="email"
        onChange={(e) => {
          dispatch(
            createUser({
              email: e.target.value,
            })
          )
        }}
      />
    </div>
  );
};

export default App;
