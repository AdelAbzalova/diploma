import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  foundations: [],
  status: "",
};
export const fetchFoundations = createAsyncThunk(
  "foundations/fetchFoundations",
  async (_, { rejectWithValue }) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ result: 1, data: require("./foundations.json") });
      }, 1000);
    });
    if (response.result && response.data) {
      return response.data;
    } else {
      return rejectWithValue("server error");
    }
  }
);
const foundationsSlice = createSlice({
  name: "foundations",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoundations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFoundations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.foundations = action.payload || [];
      })
      .addCase(fetchFoundations.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export default foundationsSlice.reducer;
export const {} = foundationsSlice.actions;
