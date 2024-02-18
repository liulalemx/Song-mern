import { createSlice } from "@reduxjs/toolkit";
import { Stat } from "@/types/Stat";

const statSlice = createSlice({
  name: "stats",
  initialState: {
    stats: {} as Stat,
    isLoading: false,
  },
  reducers: {
    getStatsFetch: (state) => {
      state.isLoading = true;
    },
    getStats: (state, action) => {
      state.stats = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getStats, getStatsFetch } = statSlice.actions;

export default statSlice.reducer;
