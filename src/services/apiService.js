import axios from "axios";
import { store } from '../store/store'

const apiRequest = async ({
    method,
    url,
    data,
    isToken,
}) => {


    let response = null, error = null
    let options = {
        method: method,
        url: `${process.env.REACT_APP_API_URL}${url}`,
        headers: {
            'Accept': 'application/json',
        },
        data: data
    }

    console.log('options', options)

    if (isToken) {
        let { auth } = store.getState()
        let token = auth?.userToken

        options = {
            ...options,
            headers: {
                ...options.headers,
                'x-access-token': `${token}`
            }
        }
    }

    await axios(options)
        .then(res => {
            response = res
        })
        .catch(err => {
            console.error('API ERROR:::', err)
            error = err
        })

    return { response, error }
}

export { apiRequest }