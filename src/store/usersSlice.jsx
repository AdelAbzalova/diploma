import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  status: "",
};
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ result: 1, data: require("./users.json") });
      }, 1000);
    });
    if (response.result && response.data) {
      return response.data;
    } else {
      return rejectWithValue("server error");
    }
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload || [];
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { reducer: usersReducer, actions: usersActions } = usersSlice;
