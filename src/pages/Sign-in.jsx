import Form from "../componant/form/Form";
import "../utils/styles/sign-in.css";

function Signin() {
    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <Form/>
                </form>
            </section>
       </main> 
    )
}

export default Signin