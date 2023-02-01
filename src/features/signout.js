import {actions} from './Slice/user'


export function signOut(){
    
    return (dispatch, getState) => {
        //const status = selectSignout(getState()).statusData
        sessionStorage.clear();
        dispatch(actions.reset())
    } 
}