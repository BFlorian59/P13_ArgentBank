import {actions} from './Slice/token'
export function signOut(){
    return (dispatch, getState) => {
        window.localStorage.clear();
        window.sessionStorage.clear();
    } 
}