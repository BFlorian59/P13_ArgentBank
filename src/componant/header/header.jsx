import ArgentBankLogo from "../../assets/argentBankLogo.png";
import { Link, useNavigate} from "react-router-dom";
import { selectUser } from '../../utils/selector'
import { useDispatch, useSelector } from "react-redux"
import  {signOut} from "../../features/signout"
import { fetchUser } from "../../features/service/user";
import '../../utils/styles/header.css';
import { useEffect } from "react";

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    const token = (sessionStorage.getItem('token-info')|| localStorage.getItem('token-info'))
    const Remembered = localStorage.getItem('isRemembered')

    function logout() {

        dispatch(signOut())
    }

    useEffect(() => {
        if (Remembered) {
            dispatch(fetchUser(token))
            navigate('/User')
        }        
    }, [Remembered, dispatch, navigate, token])
        
    
    return token && user.data ? (
        <nav className="main-nav">
            <Link to={'/'} className="main-nav-logo">
                <img
                className="main-nav-logo-image"
                src={ArgentBankLogo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to={'/User'} className="main-nav-item"> 
                    <i className="fa fa-user-circle"></i>
                    {user.data.data.firstName}
                </Link>
                <Link to={'/'} onClick={logout} className="main-nav-item">Sign out</Link>
            </div>
        </nav>
    ):(
        <nav className="main-nav">
            <Link to={'/'} className="main-nav-logo">
                <img
                className="main-nav-logo-image"
                src={ArgentBankLogo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <Link to={'/login'} className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
        </nav>
    )
}

export default Header