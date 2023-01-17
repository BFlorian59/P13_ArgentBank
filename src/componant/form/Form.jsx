import { Link } from "react-router-dom";

function Form() {
    return(
        <div>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <Link to={'/User'} className="sign-in-button">Sign In</Link>
        </div>
    )
}

export default Form