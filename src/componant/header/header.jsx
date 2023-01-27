import ArgentBankLogo from "../../assets/argentBankLogo.png";
import { Link} from "react-router-dom";
import { selectUser } from '../../utils/selector'
import { useSelector, useDispatch } from "react-redux"
import { signOut } from '../../features/signout'
import '../../utils/styles/header.css';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const storages = sessionStorage.getItem('token-info')

    function logout() {
        sessionStorage.clear()
        localStorage.clear()
        dispatch(signOut())
    }
    
    
    return (storages && user.data ?
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
    :
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
                <Link to={'/login'} className="main-nav-item"> 
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Header