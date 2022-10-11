import { createSlice } from "@reduxjs/toolkit";

const catgSlice = createSlice({
    name: 'categories',
    initialState: {
        topCategories: [],
        audioLanguages: [],
        otherCategories: []
    },
    reducers: {
        fetchCategories(state, action) {
            const { topCategories, audioLanguages, otherCategories } = action.payload
            state.topCategories = topCategories
            state.audioLanguages = audioLanguages
            state.otherCategories = otherCategories
        }
    }
})

export const catgActions = catgSlice.actions
export default catgSlice.reducer