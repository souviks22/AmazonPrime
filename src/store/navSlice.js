import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'navbar',
    initialState: {
        isSearchBarExpanded: false,
        isCategoryDropped: false,
        isCategoryHolded: false,
        isWebLangDropped: false,
        isAuthStatusDropped: false,
        isBackdropActive: false
    },
    reducers: {
        expandSearchBar(state) {
            state.isSearchBarExpanded = true
        },
        shrinkSearchBar(state) {
            state.isSearchBarExpanded = false
        },
        dropCategory(state) {
            state.isCategoryDropped = true
        },
        liftCategory(state) {
            state.isCategoryDropped = false
        },
        holdCategory(state) {
            state.isCategoryHolded = true
        },
        unholdCategory(state) {
            state.isCategoryHolded = false
        },
        dropWebLang(state) {
            state.isWebLangDropped = true
        },
        liftWebLang(state) {
            state.isWebLangDropped = false
        },
        dropAuthStatus(state) {
            state.isAuthStatusDropped = true
        },
        liftAuthStatus(state) {
            state.isAuthStatusDropped = false
        },
        activateBackdrop(state) {
            state.isBackdropActive = true
        },
        deactivateBackdrop(state) {
            state.isBackdropActive = false
        }
    }
})

export const navActions = navSlice.actions
export default navSlice.reducer