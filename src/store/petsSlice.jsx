import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    pets:[],
//   groups: [],
  status: '',
//   privacyFilter: null,
//   avatarFilter: null,
//   friendsFilter: null
}


export const fetchPets = createAsyncThunk('pets/fetchPets', async (_, { rejectWithValue }) => {
  const response = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ result: 1, data: require('./pets.json') });
    }, 1000);
  });
  if (response.result && response.data) {

    return response.data;
  } else {
    return rejectWithValue('server error')
  }
});
const petsSlice = createSlice({
  name: 'pets',
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
      .addCase(fetchPets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pets = action.payload || [];
      })
      .addCase(fetchPets.rejected, (state) => {
        state.status = 'failed';
      });
  },

});

export default petsSlice.reducer;
export const {
//   changePrivacyFilter,
//   changeAvatarFilter,
//   changeFriendsFilter,
//   clearFilters,
} = petsSlice.actions;

