import { createSlice } from "@reduxjs/toolkit";

const initialState = "all";
const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilter(state, action) {
            return action.payload
        },
        
    },
    prepare(filter) {
        return {
            payload: filter,
        }
    }
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;