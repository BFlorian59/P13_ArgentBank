import {actions} from './Slice/user'

export function signOut(){
    
    return (dispatch, getState) => {
        sessionStorage.clear();
        localStorage.clear();
        dispatch(actions.reset())
    } 
}