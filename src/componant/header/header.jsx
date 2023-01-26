import ArgentBankLogo from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { selectUser } from '../../utils/selector'
import { useSelector, useDispatch } from "react-redux"
import { signOut } from '../../features/signout'
import '../../utils/styles/header.css';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    //const storages = windows.sessionStorage.getItem('token-info') 
    const storages = window.sessionStorage.getItem('token-info')
    console.log(storages)   

    function logout() {
        return (
            sessionStorage.clear(),
            localStorage.clear(),
            console.log(storages)   
        )
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
                <button onClick={logout} className="main-nav-item">Sign out</button>
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