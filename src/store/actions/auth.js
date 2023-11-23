import { apiRequest } from "../../services/apiService";
import { SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constant";

export const signUp = (payload, successCallback, errorCallback) => {
     console.log('signup', payload)
    return async (dispatch) => {
        dispatch({ type: SIGNUP_REQUEST });
        const { response, error } = await apiRequest({
            method: 'POST',
            url: `signup`,
            data: payload
        })
        if (response) {
            dispatch({ type: SIGNUP_SUCCESS, payload: response?.data })
            successCallback()
        }
        else if (error) {
            dispatch({ type: SIGNUP_FAIL })
            errorCallback(error?.response?.data?.message)
        }
    }
}