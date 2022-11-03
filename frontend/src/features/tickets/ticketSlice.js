import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ticketService from './ticketService';
// NOTE: use a extractErrorMessage function to save some repetition
import { extractErrorMessage } from '../../utils';

// NOTE: no need for isLoading, isSuccess, isError or message as we can leverage
// our AsyncThunkAction and get Promise resolved or rejected messages at
// component level
const initialState = {
  tickets: null,
  ticket: null,
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  extraReducers: (builder) => {},
});

export default ticketSlice.reducer;
