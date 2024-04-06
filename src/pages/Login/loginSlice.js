import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk("login", async (userData) => {
  const response = await fetch(
    "https://medico-backend-production.up.railway.app/api/patient/login",
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
    console.log(data)
    return data
  }
  
  
  
  
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});
export default loginSlice.reducer;
