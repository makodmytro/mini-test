import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedOption: '',
    discountCode: '',
    notes: ''
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSelectedOption: (state, action) => {
            state.selectedOption = action.payload;
        },
        setDiscountCode: (state, action) => {
            state.discountCode = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
    },
});

export const { setSelectedOption, setDiscountCode, setNotes } = appSlice.actions;
export default appSlice.reducer;
