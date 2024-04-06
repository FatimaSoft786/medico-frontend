import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const doctor = createAsyncThunk("doctors", async (userData) => {
    console.log(userData)
  const response = await fetch(
    "https://medico-backend-production.up.railway.app/api/service/findDoctor",
    {
      method: "POST",
      body: JSON.stringify(userData),
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

const doctorSlice = createSlice({
  name: "doctors",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(doctor.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doctor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(doctor.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});
export default doctorSlice.reducer;
