import { Navigate, Outlet } from "react-router-dom"

const useAuth=()=>{
    const user= sessionStorage.getItem('user-info')

    return user ? true : false
}

const PrivateRoutes = () => {
    
    const auth=useAuth()
    return(
        auth ? <Outlet/> : <Navigate to='/login' />
    )
}

export default PrivateRoutes