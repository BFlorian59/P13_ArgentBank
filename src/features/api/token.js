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
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                email: "tony@stark.com",
                password: "password123"
            })            
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