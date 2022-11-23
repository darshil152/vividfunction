
import SideImg from '../../images/login-img.png';
import LeftLogo from '../../images/left-logo.png';
import Logo from '../../images/main-logo.png';
import { Formik } from 'formik';
import axios from 'axios'
import * as Yup from 'yup';

// import 'toastr/build/toastr.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login(params) {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setshowPassword] = useState("password");
    const [IconPassword, setIconPassword] = useState(false);

    const submitFormData = (formData, resetForm) => {
        console.log('form :: ', formData);
        axios.post('https://node.staging.rentechdigital.com:3500/api/v1/signin', {
            "email": formData.email,
            "password": formData.password
        })
            .then(function (response) {
                console.log(response, "res");
                window.location.href = "./approval"
            })
            .catch(function (error) {
                console.log(error, 'err');
            });
    };


    const errorContainer = (form, field) => {
        return form.touched[field] && form.errors[field] ? (
            <span className="error text-danger">{form.errors[field]}</span>
        ) : null;
    };

    const formAttr = (form, field) => ({
        onBlur: form.handleBlur,
        onChange: form.handleChange,
        value: form.values[field],
    });

    const showpassword = () => {
        if (showPassword === "password") {
            setshowPassword("text");
            setIconPassword(true);
        } else {
            setshowPassword("password");
            setIconPassword(false);
        }
    };


    const showemail = () => {
        if (showemail === "password") {
            setshowPassword("text");
            setIconPassword(true);
        } else {
            setshowPassword("password");
            setIconPassword(false);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 p-0 d-lg-block d-none">
                        <div className="login-side-img position-relative">
                            <img src={SideImg} alt="Vivid" className="w-100 side-img" />
                            <div className='left-logo'>
                                <img src={LeftLogo} alt="vivid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="login-main-area">
                            <div className="login-main-part-scroll">
                                <div className="login-main-side">
                                    <div className="m-auto login-main-box">
                                        <div className="w-100 text-center mb-5">
                                            <img src={Logo} alt="vivid" className="img-fluid" />
                                        </div>
                                        <div className="mb-4">
                                            <h1>Sign In</h1>
                                            <p>Enter email and password to login your account.</p>
                                        </div>

                                        <Formik
                                            // innerRef={this.runforms}
                                            enableReinitialize
                                            initialValues={{
                                                email: "",
                                                password: "",
                                            }}
                                            validationSchema={Yup.object({
                                                email: Yup.string().email().required(
                                                    'Email is required.'
                                                ),
                                                password: Yup.string().required(
                                                    'Password is required.'
                                                ),
                                            })}
                                            onSubmit={(formData, { resetForm }) => {
                                                submitFormData(formData, resetForm);
                                            }}
                                        >
                                            {(runform) => (
                                                <form className="row" onSubmit={runform.handleSubmit}>
                                                    <div className="col-12 mb-3">
                                                        <label className="d-block login-label-text mb-2">
                                                            Email Address
                                                        </label>

                                                        <bdi className="position-relative d-block mb-2">
                                                            <input
                                                                type="email"
                                                                className="form-control login-comn-input ps-5"
                                                                name="email"
                                                                {...formAttr(runform, 'email')}
                                                                placeholder="Enter your  email"
                                                            />
                                                            <span id="eye-pwd" className="eye-pwd bg-transparent">
                                                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5.5252 11.657L0.575195 6.70702L1.9892 5.29302L5.5267 8.82652L5.5252 8.82802L14.0102 0.343018L15.4242 1.75702L6.9392 10.243L5.5262 11.656L5.5252 11.657Z" fill="#219653" />
                                                                </svg>
                                                            </span>
                                                            <span id="input-left-icon" className="input-left-icon bg-transparent">
                                                                <svg width="16" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="#1A202C" />
                                                                </svg>
                                                            </span>
                                                        </bdi>
                                                        {errorContainer(runform, 'number')}
                                                    </div>

                                                    <div className="col-12 mb-3">
                                                        <label className="d-block login-label-text mb-2">
                                                            Password
                                                        </label>
                                                        <bdi className="position-relative d-block mb-2">
                                                            <input
                                                                type={showPassword}
                                                                className="form-control login-comn-input ps-5"
                                                                {...formAttr(runform, 'password')}
                                                                name="password"
                                                                placeholder="*******"
                                                            />
                                                            <span id="eye-pwd" className="eye-pwd bg-transparent" onClick={showpassword}>
                                                                {IconPassword ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>}
                                                            </span>
                                                            <span id="input-left-icon" className="input-left-icon bg-transparent" onClick={showpassword}>
                                                                <svg width="16" height="16" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM5 5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5V5ZM14 19H2V9H14V19ZM8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16Z" fill="#1A202C" />
                                                                </svg>

                                                            </span>
                                                        </bdi>
                                                        {errorContainer(runform, 'password')}
                                                    </div>

                                                    <div className="col-12 mb-3 pt-2 text-center">
                                                        <button
                                                            type="submit"
                                                            className="btn-comn-class w-100"
                                                        // onClick={handlelogin}
                                                        >
                                                            Login
                                                        </button>
                                                    </div>
                                                </form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
