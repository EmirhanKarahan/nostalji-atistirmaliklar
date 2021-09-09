import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Snack {
  id: number;
  name: string;
  countinued?:boolean;
  category:string;
}

interface SnackState {
  data: Snack[] | null;
  loading: boolean;
  error: string;
}

const initialState: SnackState = {
  data: null,
  loading: false,
  error: "",
};

export const fetchSnacks = createAsyncThunk("fetchSnacks", async () => {
  const response = await fetch('/api/snacks.json')
  .then(response => response.json() )
  .then(data => data.snacks as Promise<Snack[]>)
  return response
});

const snacksSlice = createSlice({
  name: "snacks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSnacks.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchSnacks.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetching snacks!";
    });
    builder.addCase(
      fetchSnacks.fulfilled,
      (state, action: PayloadAction<Snack[]>) => {
        state.loading = false;
        state.error = "";
        state.data = action.payload;
      }
    );
  },
});

export default snacksSlice.reducer;