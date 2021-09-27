import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import snacksSlice from "../features/snacksSlice";
import filtersSlice from "../features/filtersSlice";

const store = configureStore({
  reducer: {
    snacks: snacksSlice,
    filters: filtersSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;