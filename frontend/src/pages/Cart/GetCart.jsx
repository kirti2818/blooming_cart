import React, { useEffect, useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"
import {  getCart } from '../../redux/action';

export const GetCart = () => {
    const [dummy, setdummy] = useState(false)
    const dispatch = useDispatch()
    const data1 = useSelector(store => store.cart)
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const handleChange = (value, id) => {
        let token = localStorage.getItem("token")

        axios.patch(`https://dull-pink-tortoise-wrap.cyclic.app/carts/${id}`, {
            quantity: value,
        }, {
            headers: {
                'authorization': token
            }
        }).then((res) => {
            // setCartItems(res.data)
            console.log(res)
        }).catch(err => console.log("err")).finally(() => {
            dispatch(getCart())
        })

    }



    useEffect(() => {
        dispatch(getCart())
    }, [])


    const deleteProduct = (id) => {
        setdummy(false)
        let token = localStorage.getItem("token")
        
        const response = axios.delete(`https://dull-pink-tortoise-wrap.cyclic.app/carts/${id}`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': token
            }
        })
        return response
    }


    const handleDelete = (id) => {
        setdummy(false)
        console.log(id)
        deleteProduct(id)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        setdummy(true)
        dispatch(getCart())
        // handleDelete()

    }, [data1.length, dummy])

    return (
        <div>
            {
                typeof (data1) === "object" && data1.map((ele) => (
                    <div className='productCard productsdiv' key={ele._id}>
                        <h1>Item {data1.indexOf(ele) + 1} of {data1.length}:</h1>
                        <hr />
                        <div className='prodcart'>
                            <img src={ele.image} alt="img" />
                            <div className='productItem'>
                                <div>
                                    <h4>{ele.productname}</h4>
                                    <h4>Sold By The Market</h4>
                                    <h4>${ele.price}</h4>
                                    <label>Oty</label>
                                    <select onChange={(e) => handleChange(e.target.value, ele._id)}>
                                        {options.map((e) => <option value={e} selected={e === ele.quantity} id={e}>{e}</option>)}
                                    </select>
                                    <h1>SubTotal : {(ele.price * ele.quantity).toFixed(2)}</h1>
                                </div>
                                <div>
                                    <button
                                        className='buttonRemove' onClick={() => handleDelete(ele._id)} >
                                        <DeleteIcon />
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
