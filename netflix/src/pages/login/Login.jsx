
import "./login.scss";

export const Login = () => {


    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">

                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                </div>

            </div>
            <div className="container">
                <form >
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButtoh">Sign In</button>
                    <span>New to Netflix <b>Sign Up Now.</b></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a Bot. <b>Learn More</b></small>
                </form>

            </div>
        </div>
    );
};
