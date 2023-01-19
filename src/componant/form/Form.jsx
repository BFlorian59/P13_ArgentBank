import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchOrUpdateUser } from '../../features/api/user'

function Form() {

    const dispatch = useDispatch()

    useEffect(() =>{
        
        dispatch(fetchOrUpdateUser())
    },[dispatch])
        
    
    return(
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
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
            </form>
        </section>
        
    )
}

export default Form