import produce from "immer";

// Le state initial
const initialState = {

    statusData: 'void',
    statusToken:'void',
    token:null,
    data: null,
    error: null,
  }

const FETCHING = 'user/login/fetching'
const RESOLVED = 'user/login/resolved'
const REJECTED = 'user/login/rejected'

const userFetching = () => ({type: FETCHING})

const userResolved = (data) => ({type: RESOLVED, payload: data})

const userRejected = (error) => ({type: REJECTED, payload: error})

export default function userReducer(state = initialState, action){

    return produce(state, draft =>{
        switch (action.type) {
            case FETCHING:{               
                if (draft.statusData === 'void') {
                    draft.statusData = 'pending'
                    return
                }
                if (draft.statusData === 'resolved') {
                    draft.statusData = 'updating'
                    return
                    
                }
                if (draft.statusData === 'rejected') {
                    draft.error = null
                        draft.statusData = 'pending'
                        return
                }
                return
            }
            case RESOLVED:{ 
                if (draft.statusData === 'pending' || draft.statusData === 'uptading') {
                    draft.data = action.payload
                    draft.statusData= 'resolved'
                    return
                }
                return
            }
            case REJECTED:{
                if (draft.statusData === 'pending' || draft.statusData === 'uptading') {
                    draft.error = action.payload
                    draft.data = null 
                    draft.statusData= 'rejected'
                    return
                }
                return
            }
            default:
                return
        }
    })
}