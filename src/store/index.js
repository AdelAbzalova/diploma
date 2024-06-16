import { configureStore } from "@reduxjs/toolkit";
import foundationsSlice from "./foundationsSlice";
import { petsReducer } from "./petsSlice";
import { usersReducer } from "./usersSlice";

const store = configureStore({
  reducer: {
    pets: petsReducer,
    foundations:foundationsSlice,
    users:usersReducer,
  },
});
export default store;
