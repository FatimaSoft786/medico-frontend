import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const service = createAsyncThunk("service", async () => {

  const response = await fetch(
    "https://medico-backend-production.up.railway.app/api/service/fetch",
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
