import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  './ForgetPassword.css'

function ForgetPassword() {

  
  return (
        <form className="p-4 card" style={{borderRadius: "15px"}}>
          <Link to='/'><i class="fa-solid fa-xmark"></i></Link>
          <h2 className='d-flex justify-content-center mb-2'>Quên Mật Khẩu?</h2>
          <p className='d-flex justify-content-center m-4'>Vui lòng cung cấp email của bạn </p>
          <div className="form-outline mb-4">
              <label className="form-label" for="form3Example3">Email</label>
              <input type="email" id="form3Example3" className="text text-muted form-control form-control-lg"
              placeholder="Nhập email" />
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
              <button type="button" className="btn btn-primary btn-lg w-100">CẤP LẠI MẬT KHẨU</button>
          </div>
        </form>
  )
}

export default ForgetPassword