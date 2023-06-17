import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dark: false,
}

export const themeSlice = createSlice({
    name: 'darkTheme',
    initialState,
    reducers: {
        changeTheme: (state) => ({
            ...state,
            dark: !state.dark,
        })
    }
})

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;