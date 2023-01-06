import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: undefined,
    modalVisible: false,
    currentStep: 1,
    date_start: undefined,
    date_end: undefined,
    duration_start: undefined,
    duration_end: undefined,
    area: [],
    keyword: [],
    placeId: undefined,
    tendency_result: undefined,
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
        set_userId: (state, action) => ({
            ...state,
            userId: action.payload,
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
        set_placeId: (state, action) => ({
            ...state,
            placeId: action.payload,
        }),
        set_tendency_result: (state, action) => ({
            ...state,
            tendency_result: action.payload,
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
    set_userId,
    set_date_start,
    set_date_end,
    set_duration_start,
    set_duration_end,
    set_Area,
    set_keyword,
    set_placeId,
    set_tendency_result
} = RecommendCourseStepSlice.actions;
export default RecommendCourseStepSlice.reducer;