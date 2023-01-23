import { actions } from "../Slice/user";
import { selectUser } from "../../utils/selector";

export function fetchUser(token){
    return async (dispatch, getState) => {
        const status = selectUser(getState()).statusData
        if (status === 'pending' || status === 'updating') {
            return
        }
        
        await dispatch(actions.userFetching(token))
        console.log(token)

        const Bearer_Token = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authentication: 'Bearer Token' + token
            }            
        }

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', Bearer_Token)
            
            const data = await response.json()
            console.log(data)
            dispatch(actions.userResolved(token, data))
        } catch (error) {
            dispatch(actions.userRejected(token, error))
        }
    }
}