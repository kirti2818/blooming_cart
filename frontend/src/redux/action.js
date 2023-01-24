import * as types from "./actionTypes"
import axios from "axios"


const getCartRequest = () => {
    return {
        type: types.GET_CART_REQUEST
    }
}
const getCartSuccess = (payload) => {
    return {
        type: types.GET_CART_SUCCESS,
        payload
    }
}
const getCartError = () => {
    return {
        type: types.GET_CART_FALIURE
    }
}

const getCart = () => (dispatch) => {
    // console.log(params)
    let token = localStorage.getItem("token")
    dispatch(getCartRequest())
    return axios.get(`https://dull-pink-tortoise-wrap.cyclic.app/carts`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    })
        .then((r) => {
            dispatch(getCartSuccess(r.data))
        }).catch((e) => {
            dispatch(getCartError())
        })
}

const deleteItem = async (id) => {

    try {
        await axios.delete(`https://dull-pink-tortoise-wrap.cyclic.app/carts/${id}`, {
            headers: {
                'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E3NzMzYjIyMjlmMWM1YTAzZTRkNiIsInJvbGUiOiJFeHBsb3JlciIsImVtYWlsIjoic3JAZ21haWwuY29tIiwibmFtZSI6InJhaHVsIiwiaWF0IjoxNjc0MjEzMjA2fQ.BfAMpuadLZfdULOXvlXTDIyQPUL2dlg3DZmFB6-VypA"

            }
        });
    } catch (error) {
        console.log("err")
    }

}

export { getCart, deleteItem }