import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Home() {


    return (
    <div className='container-xl mt-4 mb-2'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/banner1.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
              <img src="img/banner2.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="img/banner3.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="img/banner4.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
              <img src="img/banner5.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="img/banner6.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon icon-banner" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon icon-banner" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>

      <div className='row gx-5 mt-4'>
          <div class="card col-lg-3 col-md-6 border-0">
            <img src="img/phim1.jpg" style={{ width: "auto", height:"80%" }} class="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div class="card-body ">
              <h6 class="d-flex justify-content-center mt-2">Đất Rừng Phương Nam</h6>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' class="btn btn-danger">Mua Vé</Link>
                <a href="#!" class="btn btn-primary">Trailer</a>
              </div>
            </div>
          </div>
          <div class="card col-lg-3 col-md-6 border-0">
            <img src="img/phim2.jpg" style={{ width: "auto", height:"80%" }} class="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div class="card-body">
              <h6 class="d-flex justify-content-center mt-2">Quỷ Môn Quan: Gọi Hồn</h6>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' class="btn btn-danger">Mua Vé</Link>
                <a href="#!" class="btn btn-primary">Trailer</a>
              </div>
            </div>
          </div>
          <div class="card col-lg-3 col-md-6 border-0">
            <img src="img/phim3.jpg" style={{ width: "auto", height:"80%" }} class="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div class="card-body">
              <h6 class="d-flex justify-content-center mt-2">Năm Đêm Kinh Hoàng</h6>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' class="btn btn-danger">Mua Vé</Link>
                <a href="#!" class="btn btn-primary">Trailer</a>
              </div>
            </div>
          </div>
          <div class="card col-lg-3 col-md-6 border-0">
            <img src="img/phim4.jpg" style={{ width: "auto", height:"80%" }} class="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div class="card-body">
              <h6 class="d-flex justify-content-center mt-2">Âm Hồn Đô Thị</h6>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' class="btn btn-danger">Mua Vé</Link>
                <a href="#!" class="btn btn-primary">Trailer</a>
              </div>
            </div>
          </div>
          <div class="card col-lg-3 col-md-6 border-0">
            <img src="img/phim5.jpg" style={{ width: "auto", height:"80%" }} class="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div class="card-body">
              <h6 class="d-flex justify-content-center mt-2">Người Vợ Cuối Cùng</h6>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' class="btn btn-danger">Mua Vé</Link>
                <a href="#!" class="btn btn-primary">Trailer</a>
              </div>
            </div>
          </div>
          <div class="card col-lg-3 col-md-6 border-0">
            <img src="img/phim6.jpg" style={{ width: "auto", height:"80%" }} class="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div class="card-body">
              <h6 class="d-flex justify-content-center mt-2">Vầng Trăng Máu</h6>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' class="btn btn-danger">Mua Vé</Link>
                <a href="#!" class="btn btn-primary">Trailer</a>
              </div>
            </div>
          </div>
          <div class="card col-lg-3 col-md-6 border-0">
            <img src="img/phim7.jpg" style={{ width: "auto", height:"80%" }} class="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div class="card-body">
              <h6 class="d-flex justify-content-center mt-2">Quỷ Ám : Tín Đồ </h6>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' class="btn btn-danger">Mua Vé</Link>
                <a href="#!" class="btn btn-primary">Trailer</a>
              </div>
            </div>
          </div>

      </div>

      

    </div>
  )
}

export default Home

/* {
        posts && posts.map(post => (
          <div 
              key={post.id}  
              className="card p-2 mt-2" 
              style={{width: "18rem"}}
             >
            <div className="card-body">
              <h5 className="card-title bg-primary text-white">{post.title}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{post.postText}</h6>
              <p className="card-text">{post.username}</p>
              <Link to={`/posts/byId/${post.id}`} className='btn btn-primary'>Xem Chi Tiet</Link>
            </div>
          </div>
          )
        )
        } */