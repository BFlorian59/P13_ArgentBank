import { actions } from "../Slice/token";
import { selectUser } from "../../utils/selector";

export function fetchToken(userLogin){
    return async (dispatch, getState) => {
        const status = selectUser(getState()).statusToken
        if (status === 'pending' || status === 'updating') {
            return
        }
        
        dispatch(actions.tokenFetching(userLogin))

        const Bearer_Token = {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }            
        }

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', Bearer_Token)
            
            const data = await response.json()
            console.log(data)
            dispatch(actions.tokenResolved(userLogin, data))
        } catch (error) {
            dispatch(actions.tokenRejected(userLogin, error))
        }
    }
}