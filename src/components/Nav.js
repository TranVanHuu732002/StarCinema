import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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

                <Link className="btn btn-sm btn-warning ms-5 me-3" to="/tickets/buy">
                    <button className='btn btn-sm btn-outline text-dark'>Mua Ve</button>
                </Link>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Phim</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Góc Điện Ảnh</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Sự Kiện</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/">Rạp/Giá Vé</Link>
                    </li>
                </ul>
            </div>

            <form class="d-flex input-group w-auto">
                <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Tìm Kiếm "
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => setValue(e.target.value)}
                />
                <button 
                class="input-group-text border-0 ms-1 rounded"
                id="search-addon"
                onClick={searchIcon}>
                    <i class="fas fa-search"></i>
                </button>
            </form>

            <div className="d-flex align-items-center ms-4">
                <Link to="/login" type="button" class="btn btn-primary me-3">
                Đăng Nhập
                </Link>
                <Link
                class="d-flex align-items-center hidden-arrow"
                to="/profile"
                aria-expanded="false"
                >
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    class="rounded-circle"
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
