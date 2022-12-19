import {authApi} from './authApi';
import {RootState} from '../../app/store';
import {removeFromLocalStorage, saveToLocalStorage} from '../../common/utils/local-storage';
import {AsyncThunk, createSlice} from '@reduxjs/toolkit';

type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type InitialStateType = {
    token: string | null
    userId: string | null
    status: StatusType
    error: SerializedError | null
    userName: string
    email: string
    avatar: string
}
type SerializedError = {
    name?: string
    message?: string
    code?: string
    stack?: string
}
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

const initialState: InitialStateType = {
  token: null,
  userId: null,
  status: 'loading',
  error: null,
  userName: 'new name',
  email: '',
  avatar: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        (action): action is GenericAsyncThunk => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'failed'
          state.error = action.payload.data.error
        }
      )
      .addMatcher(
        (action): action is GenericAsyncThunk => action.type.endsWith('/fulfilled'),
        (state) => {
          state.status = 'succeeded'
          state.error = null
        }
      )
      .addMatcher(authApi.endpoints.authMe.matchFulfilled,
        (state: InitialStateType, {payload}) => {
          const {_id, token, email, name} = payload
          if (_id && token) {
            state.token = token
            state.userId = _id
            state.email = email
            state.userName = name
            state.status = 'succeeded'
          }
        }
      )
    //login
      .addMatcher(authApi.endpoints.login.matchPending,
        (state) => {
          state.status = 'loading'
          state.error = null
        }
      )
      .addMatcher(authApi.endpoints.login.matchFulfilled,
        (state: InitialStateType, {payload}) => {
          const {_id, token, email, name } = payload
          state.token = token
          state.userId = _id
          state.email = email
          state.userName = name
          saveToLocalStorage('id', _id)
          saveToLocalStorage('token', token)
        }
      )
    //logout
      .addMatcher(authApi.endpoints.logout.matchFulfilled,
        (state) => {
          state.token = null
          state.userId = null
          removeFromLocalStorage('id')
          removeFromLocalStorage('token')
        }
      )
    //change Name
      .addMatcher(authApi.endpoints.changeName.matchFulfilled,
        (state, {payload}) => {
          state.userName = payload.updatedUser.name
          state.email = payload.updatedUser.email
        }
      )
  }
})

export const selectCurrentUser = (state: RootState) => state.auth.userId;
export const selectCurrentError = (state: RootState) => state.auth.error;
export const selectCurrentStatus = (state: RootState) => state.auth.status;
