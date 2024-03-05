import axios from "axios";
import { GET_DOCTORS_DATA, SET_ERROR } from "./actionType.js"

export const get_DOCTORS_DATA = () => async (dispatch) => {
    dispatch({ type: SET_ERROR })
    try {
        const response = await axios.get("https://a2zithub.com/swasthyahospital/hospital/drposition");
        dispatch({ type: GET_DOCTORS_DATA, payload: response.data })
    }
    catch (error) {
        dispatch({ type: SET_ERROR })
    }
}