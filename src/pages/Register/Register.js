import React from 'react'


function Register() {

    return (
    <section className="vh-100 bg-image" style={{backgroundImage: "url('https://img6.thuthuatphanmem.vn/uploads/2022/03/16/background-phim-nhua_110939360.jpg')"}}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{borderRadius: "15px"}}>
                        <div className="card-body p-4">
                            <h2 className="text-uppercase text-center mb-3">ĐĂNG KÝ TÀI KHOẢN</h2>
            
                            <form>
            
                            <div className="form-outline mb-2">
                                <label className="form-label text-muted" for="form3Example1cg">Họ và tên</label>
                                <input type="text" id="form3Example1cg" className="form-control form-control-sm" />
                            </div>
            
                            <div className="form-outline mb-2">
                                <label className="form-label text-muted" for="form3Example3cg">Email</label>
                                <input type="email" id="form3Example3cg" className="form-control form-control-sm" />
                            </div>
                            <div className="form-outline mb-2">
                                <label className="form-label text-muted" for="form3Example3cg">Số điện thoại</label>
                                <input type="text" id="form3Example3cg" className="form-control form-control-sm" />
                            </div>

                            <div className="form-outline mb-2">
                                <label className="form-label text-muted" for="form3Example4cg">Mật khẩu</label>
                                <input type="password" id="form3Example4cg" className="form-control form-control-sm" />
                            </div>
            
                            <div className="form-outline mb-2">
                                <label className="form-label text-muted" for="form3Example4cdg">Xác nhận mật khẩu</label>
                                <input type="password" id="form3Example4cdg" className="form-control form-control-sm" />
                            </div>
            
                            <div className="form-check d-flex justify-content-center mb-4">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                <label className="form-check-label" for="form2Example3g">
                                Tôi đồng ý với những chính sách <a href="#!" className="text-body"><u>bảo mật</u></a>
                                </label>
                            </div>
            
                            <div className="d-flex justify-content-center">
                                <button type="button"
                                className="btn btn-primary btn-block btn-lg text-body w-100">ĐĂNG KÝ</button>
                            </div>
            
                            <p className="text-center text-muted mt-3 mb-0">Bạn đã có tài khoản? <a href="/login"
                                className="link-primary"><u>Đăng Nhập</u></a></p>
            
                            </form>
            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Register