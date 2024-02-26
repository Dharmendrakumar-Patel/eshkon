import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
    theme:string
    isLoaded:boolean
}

const initialState: IAppState = {
    theme: "light",
    isLoaded: false
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setThemeState: (state, action: PayloadAction<string>) => {
        state.theme = action.payload;
    },
    setLoadingState: (state, action: PayloadAction<boolean>) => {
        state.isLoaded = action.payload;
    },
  },
});

export const { setThemeState, setLoadingState } = appSlice.actions;
export const appReducer = appSlice.reducer;