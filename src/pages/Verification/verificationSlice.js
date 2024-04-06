import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const verify = createAsyncThunk("verification", async (userData) => {

  const response = await fetch(
    "http://192.168.1.4:5000/api/patient/verify",
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

const verifySlice = createSlice({
  name: "verification",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(verify.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(verify.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(verify.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});
export default verifySlice.reducer;
