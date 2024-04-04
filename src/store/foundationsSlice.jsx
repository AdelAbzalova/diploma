import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    foundations:[],
    status: '',


}


export const fetchFoundations = createAsyncThunk('foundations/fetchFoundations', async (_, { rejectWithValue }) => {
  const response = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ result: 1, data: require('./foundations.json') });
    }, 1000);
  });
  if (response.result && response.data) {

    return response.data;
  } else {
    return rejectWithValue('server error')
  }
});
const foundationsSlice = createSlice({
  name: 'foundations',
  initialState,
  reducers: {
    // changePrivacyFilter(state, action) {
    //   state.privacyFilter = action.payload
    // },
    // changeAvatarFilter(state, action) {
    //   state.avatarFilter = action.payload
    // },
    // changeFriendsFilter(state, action) {
    //   state.friendsFilter = action.payload
    // },
    // clearFilters(state) {
    //   state.privacyFilter = null;
    //   state.avatarFilter = null;
    //   state.friendsFilter = null;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoundations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFoundations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.foundations = action.payload || [];
      })
      .addCase(fetchFoundations.rejected, (state) => {
        state.status = 'failed';
      });
  },

});

export default foundationsSlice.reducer;
export const {
//   changePrivacyFilter,
//   changeAvatarFilter,
//   changeFriendsFilter,
//   clearFilters,
} = foundationsSlice.actions;

