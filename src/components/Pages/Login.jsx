import React, { useState } from 'react'
import { Bounce } from 'react-reveal';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
    //TODO: Use State Hooks to Handle Login and password Validation
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [submiterror, setSubmitError] = useState("");

    // TODO: UseNavigation Hooks for navigation Home page
    const Navigate = useNavigate();

    // TODO: Function To handle Email Validation
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 3) {
            setEmailError("Your Email Must Be at least 3 characters");
        } else {
            setEmailError("");
        }
    }

    // TODO: Function To handle Password Validation
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 3) {
            setPasswordError("Your Password Must Be at least 3 characters");
        } else {
            setPasswordError("");
        }
    }


    // TODO: Function To handle Submit Validation
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!emailError && !passwordError) {
            console.log({ email, password });
            Navigate('/')
        } else {
            setSubmitError("Please enter your email address and password");
        }
    }

    return (
        <div className='container my-5 '>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-6'>

                    <form noValidate onSubmit={(e) => {
                        handleSubmit(e);
                    }}>
                        <Bounce left>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input value={email} onChange={(e) => {
                                    handleEmail(e);
                                }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="exampleInputEmail1" className="form-text text-danger">{emailError}</div>
                            </div>
                        </Bounce>
                        <Bounce right>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input value={password} onChange={(e) => {
                                    handlePassword(e);
                                }} type="password" className="form-control" id="exampleInputPassword1" aria-describedby="examplePassword1" />
                                <div id="examplePassword1" className="form-text text-danger">{passwordError}</div>
                            </div>
                        </Bounce>
                        <div class="row mb-4 ">
                            <div class="col d-flex justify-content-center  ">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                                    <label class="form-check-label" for="form1Example3"> Remember me </label>
                                </div>
                            </div>

                            <div class="col">
                                <Link to='/'>Forgot password?</Link>
                            </div>

                        </div>

                        <Bounce>
                            <button type="submit" id='submitError' className="btn btn-dark btn-block" data-mdb-ripple-init>Sign in</button>
                            <div id="submitError" className="form-text text-danger">{submiterror}</div>
                        </Bounce>

                        <div class="col">
                            <Link to='/signup'>Registar</Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login






