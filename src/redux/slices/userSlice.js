import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const UserSlice = createSlice({
    name: 'Users',
    initialState: {
      storedValues : [],
      allUsers : [],
      singleUser : {},
      allMusic : [],
      status :""
    },
    reducers: {
        createUser : (state , {payload}) => {
            state.singleUser = payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getMusic.fulfilled , (state , {payload}) => {
            state.allMusic = payload
        })
        builder.addCase(getMusic.pending , (state , {payload}) => {
            state.status = "Pending"
        })
        builder.addCase(getMusic.rejected , (state , {payload}) => {
            state.status = "Rejected"
        })

        
    }
  })

  export const getMusic = createAsyncThunk("getMusic" , async(props) => {
    try {
        const {data} = await axios.get("https://saavn.dev/api/search/songs?query=" + props.text)

        return data.data.results
    } catch (error) {
        console.log(error)
    }
  })



  export const { createUser} = UserSlice.actions
  export default UserSlice.reducer
