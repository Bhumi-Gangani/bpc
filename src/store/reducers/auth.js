import { SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constant"

const initialState = {
    userToken: "",
    loading: false,
    userDetails: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        //signup
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                loading: false
            }

        //Default
        default:
            return state;
    }
}

export { authReducer }
