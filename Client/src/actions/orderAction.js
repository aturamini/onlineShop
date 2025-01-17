﻿import axios from 'axios'

import {
    CREATE_ORDER_FAIL,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    MY_ORDER_REQUEST,
    MY_ORDER_SUCCESS,
    MY_ORDER_FAIL,
    ALL_ORDER_REQUEST,
    ALL_ORDER_SUCCESS,
    ALL_ORDER_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAIL,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstant'

export const createOrder=(order)=> async (dispatch,getState)=>{
    try {

        dispatch({
            type:CREATE_ORDER_REQUEST,
        })

        const config ={
            headers:{
                'Content-Type' : 'application/json'
            }
        }

        const {data} = await axios.post('/order/new',order,config)

        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data
        })

    } catch (error){
        dispatch({
            type:CREATE_ORDER_FAIL,
            payload:error.response.data.message,
        })
    }
}

export const myOrders = ( ) => async (dispatch) =>{
    try{

        dispatch({type: MY_ORDER_REQUEST})
        const {data} = await axios.get('/orders/me')
        console.log(data)
        dispatch({
            type: MY_ORDER_SUCCESS,
            payload: data.orders
        })
    }
    catch (error) {
        dispatch({
            type: MY_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getOrderDetails = (id) => async (dispatch) =>{
    try{

        dispatch({type: ORDER_DETAILS_REQUEST})
        const {data} = await axios.get(`/order/${id}`)
        

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data.order
        })
        
    }
    catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const allOrders = ( ) => async (dispatch) =>{
    try{

        dispatch({type: ALL_ORDER_REQUEST})
        const {data} = await axios.get(`/admin/orders`)

        dispatch({
            type: ALL_ORDER_SUCCESS,
            payload: data 
        })
    }
    catch (error) {
        dispatch({
            type: ALL_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const updateOrder=(id, orderData)=> async (dispatch,)=>{
    try { 

        dispatch({
            type:UPDATE_ORDER_REQUEST,
        })
        

        const config ={
            headers:{
                'Content-Type' : 'application/json'
            }
        }

        const {data} = await axios.patch(`/admin/order/${id}`,orderData,config)

        dispatch({
            type:UPDATE_ORDER_SUCCESS,
            payload:data.success
        })

    } catch (error){
        dispatch({
            type:UPDATE_ORDER_FAIL,
            payload:error.response.data.message,
        })
    }
}

export const deleteOrder=(id)=> async (dispatch,)=>{
    try { 

        dispatch({
            type:DELETE_ORDER_REQUEST,
        })
        


        const {data} = await axios.delete(`/admin/order/${id}`)

  
        dispatch({
            type:DELETE_ORDER_SUCCESS,
            payload:data.success
        })

    } catch (error){
        dispatch({
            type:DELETE_ORDER_FAIL,
            payload:error.response.data.message,
        })
    }
}

export const cleanErrors = ()=> async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS,
    })
}


 