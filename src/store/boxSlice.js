import { createSlice } from "@reduxjs/toolkit";

const boxSlice = createSlice({
    name: 'navbox',
    initialState: {
        webLang: [],
        authStatus: []
    },
    reducers: {
        fetchWebLang(state, action) {
            state.webLang = [...action.payload]
        },
        fetchAuthStatus(state, action) {
            state.authStatus = [...action.payload]
        }
    }
})

export const boxActions = boxSlice.actions
export default boxSlice.reducer