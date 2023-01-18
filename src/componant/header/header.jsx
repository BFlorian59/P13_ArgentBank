import ArgentBankLogo from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import '../../utils/styles/header.css';

function Header() {
    return(
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