import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {data: [], isLoader: false, isError: false};

// First, create the thunk
export const fetchAllEmails = createAsyncThunk(
  'products/allproducts',
  async () => {
    const response = await axios.get("https://flipkart-email-mock.vercel.app/");
    // console.log(response.data)
    return response.data;
  },
);

const allProductsSlice = createSlice({
  name: 'email',
  initialState,

  extraReducers: builder => {
    builder.addCase(fetchAllEmails.pending, (state, action) => {
      state.isLoader = true;
    });

    builder.addCase(fetchAllEmails.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });

    builder.addCase(fetchAllEmails.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default allProductsSlice.reducer;