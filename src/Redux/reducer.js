import { GET_DOCTORS_DATA } from "./actionType.js";

const initialstate = {
    loading: false,
    error: false,
    doctor: [],
    slider: [],
    about: [],
    dep: [],
    
    facilities: []
}

export const reducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case GET_DOCTORS_DATA:
            return {
                ...state, loading: false, doctor: payload
            }
        default:
            return {
                ...state
            }
    }
}