import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  durationTimer: 20,
  durationBreak: 3,
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    newTimerDuration: (state, action) => {
      let newNumber = parseInt(action.payload.durationTimer);
      if(typeof(newNumber) === "number" && !Number.isNaN(newNumber)){
        state.durationTimer = newNumber
      } else if (action.payload.durationTimer === ""){
        state.durationTimer = 0;
      }
    },
    newBreakDuration: (state, action) => {
      let newNumber = parseInt(action.payload.durationBreak);
      if(typeof(newNumber) === "number" && !Number.isNaN(newNumber)){
        state.durationBreak = newNumber
      } else if (action.payload.durationBreak === ""){
        state.durationBreak = 0;
      } 
    },
  }
})

export const {newBreakDuration, newTimerDuration} = settingsSlice.actions;

export const selectDurationTimer = (state) => state.settings.durationTimer;
export const selectDurationBreak = (state) => state.settings.durationBreak;

export default settingsSlice.reducer;