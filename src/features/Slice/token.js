import { createSlice } from "@reduxjs/toolkit";

// Le state initial
const initialState = {

    statusToken:'void',
    data: null,
    error: null,
    token:null,
  }

const {action, reducer} = createSlice({
    name: 'TokenUser',
    initialState,
    reducers:{
        userFetching:{
            prepare: (token) => ({
                payload: {token},
            }),
            reducer: (draft, action ) => {
                if (draft.statusToken === 'void') {
                    draft.statusToken = 'pending'
                    return
                }
                if (draft.statusToken === 'resolved') {
                    draft.statusToken = 'updating'
                    return
                                        
                }
                if (draft.statusToken === 'rejected') {
                    draft.error = null
                    draft.statusToken = 'pending'
                    return
                }
                return
            }
        },
        userResolved:{
            prepare: (token, data) => ({
                payload: {token, data},
            }),
            reducer: (draft, action ) => {
                if (draft.statusToken === 'pending' || draft.statusToken === 'uptading') {
                    draft.data = action.payload
                    draft.statusToken= 'resolved'
                    return
                }
                return
            }
        },
        userRejected:{
            prepare: (token, error) => ({
                payload: {token, error},
            }),
            reducer: (draft, action ) => {
                if (draft.statusToken === 'pending' || draft.statusToken === 'uptading') {
                    draft.error = action.payload
                    draft.data = null 
                    draft.statusToken= 'rejected'
                    return
                }
                return
            }
        },   
    }
})
export default reducer
