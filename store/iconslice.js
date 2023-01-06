import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const iconslice = createSlice({
  name: "icon",
  initialState: {
    icon: "moon",
  },
  reducers: {
    iconMoon: (state) => {
      state.icon = "moon";
    },
    iconSun: (state) => {
      state.icon = "sun";
    },
  },
});

// export the action
export const iconAction = iconslice.actions;
