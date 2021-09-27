import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  text: string;
  sortBy: string;
}

const initialState: FilterState = {
  text: "",
  sortBy: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    sortByName: (state) => {
      state.sortBy = "name";
    },
    sortByCategoryName: (state) => {
      state.sortBy = "categoryName";
    },
  },
});

export default filtersSlice.reducer;
export const { setFilterText, sortByCategoryName, sortByName } = filtersSlice.actions;
