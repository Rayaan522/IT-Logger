import  { GET_LOADING,SET_LOADING,LOGS_ERROR, GET_LOGS } from './Types';

import React from 'react'

 export  const logActions = () => {
     

        // Get logs from Server
  const  getLogs = () => async dispatch => {

    try {
    
        setLoading();
       
        const res = await fetch('/logs');
        const data = await res.json();
    
        dispatch({
            type:GET_LOGS,
            payload:data
        })
        
    } catch (err) {
    
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.data
        })
        
    }
        
    
        
    
    }
 
  

// set loading to true
const setLoading = () => {
    return {
        type:SET_LOADING 
    }
}

     
}
// export const getLogs = () => {
//     return async dispatch => {
//         setLoading();
   
//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//         type:GET_LOGS,
//         payload:data
//     })
// }

// }




export default logActions;