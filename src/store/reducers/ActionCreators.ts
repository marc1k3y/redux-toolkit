import { IUser } from './../../models/IUser';
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
// import { AppDispatch } from "../store"
// import { userSlice } from "./UserSlice"

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching())
//     const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//     dispatch(userSlice.actions.usersFetchingSuccess(res.data))
//   } catch (e: any) {
//     dispatch(userSlice.actions.usersFetchingError(e.message))
//   }
// }

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("Users fetching error")
    }
  }
)