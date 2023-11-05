import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css'

function Nav() {
    const [value,setValue] = useState("")
    const navigate = useNavigate()

    function searchIcon() {
        navigate("/")
    }

    return ( 
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                    <img
                    src="/Logo.png"
                    height="30"
                    alt="PBL Logo"
                    loading="lazy"
                    />
                </Link>
                <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
                <Link className="btn-buytickets ms-5 me-5" to="/tickets/buy" style={{marginLeft: "30px"}}>
                    <img alt="Ticket" width="112" height="36" decoding="async" data-nimg="1" src="https://www.galaxycine.vn/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fbtn-ticket.42d72c96.webp&amp;w=256&amp;q=100"></img>
                </Link>
                    <li className="nav-item dropdown me-2">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Phim
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/movie/nowshowing">Đang chiếu</a>
                            <a className="dropdown-item" href="/movie/comingsoon">Sắp chiếu</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown me-2 ms-2">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Góc Điện Ảnh
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Thể Loại</a>
                            <a className="dropdown-item" href="/">Diễn Viên</a>
                            <a className="dropdown-item" href="/">Đạo Diễn</a>
                        </div>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Sự Kiện</Link>
                    </li>
                    <li className="nav-item dropdown me-2 ms-2">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Rạp
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Đà Nẵng</a>
                            <a className="dropdown-item" href="/">Diễn Viên</a>
                            <a className="dropdown-item" href="/">Đạo Diễn</a>
                        </div>
                    </li>
                </ul>
            </div>

            <form className="d-flex input-group w-auto">
                <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Tìm Kiếm "
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => setValue(e.target.value)}
                />
                <button 
                className="input-group-text border-0 ms-1 rounded"
                id="search-addon"
                onClick={searchIcon}>
                    <i className="fas fa-search"></i>
                </button>
            </form>

            <div className="d-flex align-items-center ms-4">
                <Link to="/login" type="button" className="btn btn-primary me-3">
                Đăng Nhập
                </Link>
                <Link
                className="d-flex align-items-center hidden-arrow"
                to="/profile"
                aria-expanded="false"
                >
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="30"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                />
                </Link>

            </div>
        </div>
    </nav>
    )
}

export default Nav
