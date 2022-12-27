import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    modalVisible: false,
    currentStep: 1,
    date_start: undefined,
    date_end: undefined,
    duration_start: undefined,
    duration_end: undefined,
    area: [],
    keyword: [],
    recImage: undefined,
    tendency: undefined,
};

const RecommendCourseStepSlice = createSlice({
    name: "RecommendCourseStep",
    initialState,
    reducers: {
        nextStep: (state, action) => ({
            ...state,
            currentStep: state.currentStep + 1,
        }),
        previousStep: (state, action) => ({
            ...state,
            currentStep: state.currentStep - 1,
        }),
        doublepreviousStep: (state, action) => ({
            ...state,
            currentStep: state.currentStep - 2,
        }),
        doubleStep: (state, action) => ({
            ...state,
            currentStep: state.currentStep + 2,
        }),
        clearStep: () => initialState,
        setModalVisible: (state, action) => ({
            ...state,
            modalVisible: action.payload,
        }),
        set_Area: (state, action) => ({
            ...state,
            area: action.payload,
        }),
        set_date_start: (state, action) => ({
            ...state,
            date_start: action.payload,
        }),
        set_date_end: (state, action) => ({
            ...state,
            date_end: action.payload,
        }),
        set_duration_start: (state, action) => ({
            ...state,
            duration_start: action.payload,
        }),
        set_duration_end: (state, action) => ({
            ...state,
            duration_end: action.payload,
        }),
        set_keyword: (state, action) => ({
            ...state,
            keyword: action.payload,
        }),
        set_recImage: (state, action) => ({
            ...state,
            recImage: action.payload,
        }),
    },
});

export const {
    nextStep,
    previousStep,
    clearStep,
    setModalVisible,
    doubleStep,
    doublepreviousStep,
    set_date_start,
    set_date_end,
    set_duration_start,
    set_duration_end,
    set_Area,
    set_keyword,
    set_recImage
} = RecommendCourseStepSlice.actions;
export default RecommendCourseStepSlice.reducer;