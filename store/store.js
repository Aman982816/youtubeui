import { configureStore } from "@reduxjs/toolkit";
import { iconslice } from "./iconslice";
// config the store
const store = configureStore({
  reducer: {
    icon: iconslice.reducer,
  },
});

// export default the store
export default store;
