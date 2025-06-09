import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'Users',
    initialState: {
      storedValues : [],
      allUsers : [],
      singleUser : {}
    },
    reducers: {
        createUser : (state , {payload}) => {
            state.singleUser = payload
        }
    }
  })


  export const { createUser} = UserSlice.actions
  export default UserSlice.reducer
