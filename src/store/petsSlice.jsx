import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  pets: [],
  status: "",
  ageFilter: "",
  genderFilter: "",
  cities: [],
  cityFilter: "",
  typeFilter: "",
  pet: "",
  isAuthorized: false,
  navCurrent: "main",
  tips: [],
};
export const fetchPets = createAsyncThunk(
  "pets/fetchPets",
  async (_, { rejectWithValue }) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ result: 1, data: require("./pets.json") });
      }, 1000);
    });
    if (response.result && response.data) {
      return response.data;
    } else {
      return rejectWithValue("server error");
    }
  }
);
export const fetchCities = createAsyncThunk(
  "pets/fetchCities",
  async (_, { rejectWithValue }) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ result: 1, data: require("./cities.json") });
      }, 1000);
    });
    if (response.result && response.data) {
      console.log("resp", response.data);
      return response.data;
    } else {
      return rejectWithValue("server error");
    }
  }
);

export const fetchTips = createAsyncThunk(
  "pets/fetchTips",
  async (_, { rejectWithValue }) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ result: 1, data: require("./tips.json") });
      }, 1000);
    });
    if (response.result && response.data) {
      return response.data;
    } else {
      return rejectWithValue("server error");
    }
  }
);

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    changeAgeFilter(state, action) {
      state.ageFilter = action.payload;
    },
    changeGenderFilter(state, action) {
      state.genderFilter = action.payload;
    },
    changeCityFilter(state, action) {
      state.cityFilter = action.payload;
    },
    changeTypeFilter(state, action) {
      state.typeFilter = action.payload;
    },
    clearFilters(state) {
      state.ageFilter = "";
      state.genderFilter = "";
      state.cityFilter = "";
      state.typeFilter = "";
    },
    logIn(state) {
      state.isAuthorized = true;
    },
    logOut(state) {
      state.isAuthorized = false;
    },
    changeNav(state, action) {
      state.navCurrent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pets = action.payload || [];
      })
      .addCase(fetchPets.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.cities = action.payload || [];
      })
      .addCase(fetchTips.fulfilled, (state, action) => {
        state.tips = action.payload || [];
      });
  },
});
export const { reducer: petsReducer, actions: petsActions } = petsSlice;
