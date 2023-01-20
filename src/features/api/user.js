import { actions } from "../Slice/user";
import { selectUser } from "../../utils/selector";

export function fetchUser(token){
    return async (dispatch, getState) => {
        const status = selectUser(getState()).statusData
        if (status === 'pending' || status === 'updating') {
            return
        }
        
        dispatch(actions.userFetching(token))

        // const Bearer_Token = {
        //     method: 'post',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         Authentication: 'Bearer Token' + token
        //     }            
        // }

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile')
            
            const data = await response.json()
            console.log(data)
            dispatch(actions.userResolved(token, data))
        } catch (error) {
            dispatch(actions.userRejected(token, error))
        }
    }
}