import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signUP = createAsyncThunk("register", async (userData) => {

  const response = await fetch(
    "http://192.168.1.4:5000/api/patient/register",
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

const registerSlice = createSlice({
  name: "register",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(signUP.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signUP.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(signUP.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});
export default registerSlice.reducer;
