import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalVisible: false,
    currentStep: 1,
    tendency_result: undefined,
    address: undefined,
    category: undefined,
    foodimg_src: undefined,
    main_menu: undefined,
    star: undefined,
    store_name: undefined,
    phone: undefined
};
const FoodStoreStepSlice = createSlice({
    name: "FoodStoreStepSlice",
    initialState,
    reducers: {
        clearStep: () => initialState,
        setModalVisible: (state, action) => ({
            ...state,
            modalVisible: action.payload,
        }),
        setCurrentStep: (state, action) => ({
            ...state,
            currentStep: 1,
        }),
        setCurrentStep1: (state, action) => ({
            ...state,
            currentStep: 2,
        }),
        set_address: (state, action) => ({
            ...state,
            address: action.payload,
        }),
        set_category: (state, action) => ({
            ...state,
            category: action.payload,
        }),
        set_foodimg_src: (state, action) => ({
            ...state,
            foodimg_src: action.payload,
        }),
        set_star: (state, action) => ({
            ...state,
            star: action.payload,
        }),
        set_store_name: (state, action) => ({
            ...state,
            store_name: action.payload,
        }),
        set_phone: (state, action) => ({
            ...state,
            phone: action.payload,
        }),
    },
});

export const {
    setModalVisible,
    setCurrentStep1,
    setCurrentStep,
    clearStep,
    set_address,
    set_category,
    set_foodimg_src,
    set_star,
    set_store_name,
    set_phone
} = FoodStoreStepSlice.actions;
export default FoodStoreStepSlice.reducer;