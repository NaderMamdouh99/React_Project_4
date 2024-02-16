import React, { useState } from 'react'
import { Bounce } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

const Contact = (props) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [submiterror, setSubmitError] = useState("");
    const Navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 3) {
            setEmailError("Your Email Must Be at least 3 characters");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 3) {
            setPasswordError("Your Password Must Be at least 3 characters");
        } else {
            setPasswordError("");
        }
    }
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
                        <Bounce>
                            <div className="mb-3" >
                                <label className="form-label" for="form4Example3" >Message</label>
                                <textarea className="form-control" id="form4Example3" rows={4} ></textarea>
                            </div>


                            <div className="form-check d-flex justify-content-center mb-4">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" />
                                <label className="form-check-label" for="form4Example4">
                                    Send me a copy of this message
                                </label>
                            </div>


                            <button type="submit" id='submitError' className="btn btn-dark btn-block" data-mdb-ripple-init>Sign in</button>
                            <div id="submitError" className="form-text text-danger">{submiterror}</div>
                        </Bounce>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact
