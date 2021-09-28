import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  text: string;
  category: string;
}

const initialState: FilterState = {
  text: "",
  category: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setFilterCategory: (state, action:PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { setFilterText, setFilterCategory } = filtersSlice.actions;
