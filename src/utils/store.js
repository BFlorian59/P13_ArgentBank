import userReducer from "../features/Slice/user";
import tokenReducer from "../features/Slice/token";
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
    }

})
