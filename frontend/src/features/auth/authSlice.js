import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import authService from './authService';
// NOTE: use a extractErrorMessage function to save some repetition
import { extractErrorMessage } from '../../utils';

//Get user from localstorage
const user = JSON.parse(localStorage.getItem('user'));

// Initial state for authSlice
const initialState = {
  user: user ? user : null,
  isLoading: false,
};

//Register async function
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    //try to register the user
    try {
      return await authService.register(user);
    } catch (error) {
      //if there is an error find the messsage

      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

//Login async function
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  console.log(user);
});

// Logout user
// NOTE: here we don't need a thunk as we are not doing anything async so we can
// use a createAction instead
export const logout = createAction('auth/logout', () => {
  authService.logout();
  // return an empty object as our payload as we don't need a payload but the
  // prepare function requires a payload return
  return {};
});

// NOTE: in cases of login or register pending or rejected then user will
// already be null so no need to set to null in these cases
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
