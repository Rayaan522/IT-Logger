import  { GET_LOADING,SET_LOADING,LOGS_ERROR, GET_LOGS,ADD_LOG } from './Types';


 
     

        // Get logs from Server
  export const  getLogs = () => async dispatch => {

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
 

          // Add  a new log 
  export const  addLog = (log) => async dispatch => {

    try {
    
        setLoading();
       
        const res = await fetch('/logs',{

            method:'POST',
            body:JSON.stringify(log),
            headers : {
               'Content-Type':'application/json'
            }
             

        });
        const data = await res.json();
    
        dispatch({
            type:ADD_LOG,
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
export const setLoading = () => {
    return {
        type:SET_LOADING 
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




// export default getLogs ;
export default (getLogs,addLog);