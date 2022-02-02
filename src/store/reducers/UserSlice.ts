import { fetchUsers } from './ActionCreators';
import { IUser } from './../../models/IUser'
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload
    },
    decrement(state, action: PayloadAction<number>) {
      state.count -= action.payload
    },
    // usersFetching(state) {
    //   state.isLoading = true
    // },
    // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.users = action.payload
    //   state.isLoading = false
    //   state.error = ''
    // },
    // usersFetchingError(state, action: PayloadAction<string>) {
    //   state.error = action.payload
    //   state.isLoading = false
    // }
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload
      state.isLoading = false
      state.error = ''
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

export default userSlice.reducer