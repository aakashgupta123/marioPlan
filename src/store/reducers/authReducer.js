const initState={
    authError:null
}
const authReducer=(state= initState ,action)=>{
    switch(action.type){
    case 'LOGIN_ERROR':
        console.log("LOGIN ERROR")
        return{
            ...state,authError:'login failed'
        }
    case 'LOGIN_SUCCESS':
            console.log("LOGIN SUCCESS")    
            return{
                ...state,authError:null
            }
    case 'SIGNOUT_SUCCESS':
        console.log('signed out')        
        return  state;
    case 'SIGNUP_SUCCESS':
        console.log('signup_success')        
        return{
            ...state,
            authError:null
        }
    case 'SIGNUP_ERROR':
        console.log('SignUp error')    
        return{
            ...state,authError:action.err.message
        }
    default:
        return state  ;
    }
}
export default authReducer;