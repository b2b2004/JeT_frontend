import { createSlice } from "@reduxjs/toolkit";

/*
loginStep
login을 위한 modal visibility와
loginStep(social login, signUp)을 관리하는 redux 입니다.
*/

const initialState = {
    modalVisible: false,
    currentStep: 1,
    duration_start: undefined,
    duration_end: undefined,
    area: undefined,
    keyword: undefined,
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

        set_duration_start: (state, action) => ({
            ...state,
            duration_start: action.payload,
        }),
        set_duration_end: (state, action) => ({
            ...state,
            duration_end: action.payload,
        }),
        setArea: (state, action) => ({
            ...state,
            area: action.payload,
        }),
        setkeyword: (state, action) => ({
            ...state,
            keyword: action.payload,
        }),
        setrecImage: (state, action) => ({
            ...state,
            recImage: action.payload,
        }),
        settendency: (state, action) => ({
            ...state,
            tendency: action.payload,
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
    set_duration_start,
    set_duration_end,
    setArea,
    setkeyword,
    setrecImage,
    settendency
} = RecommendCourseStepSlice.actions;
export default RecommendCourseStepSlice.reducer;