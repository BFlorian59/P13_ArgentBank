import {actions} from './Slice/user'


export function signOut(){
    
    return (dispatch, getState) => {
        //const status = selectSignout(getState()).statusData
        localStorage.clear();
        sessionStorage.clear();
        dispatch(actions.reset())
    } 
}