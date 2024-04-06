import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fav = createAsyncThunk("favorite", async (userData) => {
  const response = await fetch(
    "https://medico-backend-production.up.railway.app/api/patient/likedDoctor",
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    }
  );
  if(response.ok){
    const data = await response.json();
    console.log(data);
    return data
  }else{
    const data = await response.json();
    return data
  }
});

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fav.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fav.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fav.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});
export default favoriteSlice.reducer;
