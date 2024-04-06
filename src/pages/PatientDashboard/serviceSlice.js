import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const service = createAsyncThunk("service", async () => {

  const response = await fetch(
    "http://192.168.1.4:5000/api/service/fetch",
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  );
  if(response.ok){
    const data = await response.json();
    return data
  }else{
    const data = await response.json();
    return data
  }
});

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(service.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(service.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(service.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});
export default serviceSlice.reducer;
