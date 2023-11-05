import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ForgetPassword from '../../components/ForgetPassWord/ForgetPassword'
import './Login.css'


function Login() {
    const [showForgotPassword, setShowForgotPassword] = useState(true);

    const toggleForgotPassword = () => {
        setShowForgotPassword(!showForgotPassword);
    };

    return (
    <section className="vh-100 ">
        <div className="container-fluid h-custom gradient-custom-3">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                    <img className="img-fluid w-100 border-0" alt="Sample image" src="img/background.jpg" />
                </div>

                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                {
                showForgotPassword ? (
                <form className='p-4 card' style={{borderRadius:"15px"}}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal ms-3 mb-0 me-3">Đăng nhập nhanh bằng</p>
                    <button type="button" className="btn btn-sm btn-primary btn-floating mx-1">
                        <i className="fa-brands fa-facebook"></i>    
                    </button>
                    <button type="button" className="btn btn-sm btn-primary btn-floating mx-1">
                        <i className="fa-brands fa-google"></i>    
                    </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Hoặc</p>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example3">Email</label>
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Nhập email" />
                </div>

                <div className="form-outline mb-3">
                    <label className="form-label" for="form3Example4">Mật Khẩu</label>
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Nhập mật khẩu" />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" for="form2Example3">
                        Nhớ mật khẩu
                    </label>
                    </div>
                    <button onClick={toggleForgotPassword} className="btn btn-outline text-decoration-none link-primary">Quên mật khẩu?</button>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg w-100">Đăng Nhập</button>
                    <p className="d-flex justify-content-center align-items-center small fw-bold mt-2 pt-1 mb-0">Bạn chưa có tài khoản?<Link to="/register"
                        className="link-primary ms-1">Đăng Ký</Link></p>
                </div>
                </form>
                ):(
                <ForgetPassword/>
                )
                }
                </div>

            </div>

        </div>
    </section>
  )
}

export default Login