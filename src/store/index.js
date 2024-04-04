import { configureStore } from "@reduxjs/toolkit";
import foundationsSlice from "./foundationsSlice";
import petsSlice from "./petsSlice";

const store = configureStore({
  reducer: {
    pets: petsSlice,
    foundations:foundationsSlice,
  },
});

export default store;

// export type RootState=ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;