import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalVisible: false,
    address: undefined,
    guide: undefined,
    img_src: undefined,
    name: undefined,
    phone: undefined,
    rating: undefined,
    service: undefined,
    type: undefined
};

const AccommodationStepSlice = createSlice({
    name: "AccommodationStepSlice",
    initialState,
    reducers: {
        clearStep: () => initialState,
        setModalVisible: (state, action) => ({
            ...state,
            modalVisible: action.payload,
        }),
        set_Accommodation_address: (state, action) => ({
            ...state,
            address: action.payload,
        }),
        set_Accommodation_guide: (state, action) => ({
            ...state,
            guide: action.payload,
        }),
        set_Accommodation_name: (state, action) => ({
            ...state,
            name: action.payload,
        }),
        set_Accommodation_phone: (state, action) => ({
            ...state,
            phone: action.payload,
        }),
        set_Accommodation_rating: (state, action) => ({
            ...state,
            rating: action.payload,
        }),
        set_Accommodation_service: (state, action) => ({
            ...state,
            service: action.payload,
        }),
        set_Accommodation_type: (state, action) => ({
            ...state,
            type: action.payload,
        }),
        set_Accommodation_img_src: (state, action) => ({
            ...state,
            img_src: action.payload,
        }),
    },
});

export const {
    setModalVisible,
    set_Accommodation_address,
    set_Accommodation_guide,
    set_Accommodation_name,
    set_Accommodation_phone,
    set_Accommodation_rating,
    set_Accommodation_service,
    set_Accommodation_type,
    set_Accommodation_img_src,
} = AccommodationStepSlice.actions;
export default AccommodationStepSlice.reducer;