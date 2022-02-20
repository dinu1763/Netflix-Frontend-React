
import { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.scss";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    };

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
                    <input type="email" placeholder="Email or Phone Number" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="loginButtoh" onClick={handleLogin} disabled={isFetching}>Sign In</button>
                    <span>New to Netflix <b>Sign Up Now.</b></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a Bot. <b>Learn More</b></small>
                </form>

            </div>
        </div>
    );
};
