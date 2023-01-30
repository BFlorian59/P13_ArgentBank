import {actions} from './Slice/user'

export function signOut(){
    
    return (dispatch, getState) => {
        sessionStorage.clear();
        dispatch(actions.reset())
    } 
}