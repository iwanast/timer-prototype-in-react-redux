import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./features/timer/timerSlice"
import settingsReducer from "./features/settings/settingsSlice"

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    settings: settingsReducer,
  },
});