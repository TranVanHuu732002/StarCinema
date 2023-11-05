import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Home.css'
import YouTube from 'react-youtube'

function Home() {
  const navigate = useNavigate()
  const id = useParams()
  const [activeTab,setActiveTab] = useState(1)
  const [isPlaying,SetIsPlaying] = useState(false)

  const goToPageHandle = () => {
    navigate(`/details`)
  }

  const playTrailerHandle = () => {
    SetIsPlaying(true)
  }

  const videoId = 'DHa4MSOzPXw'; 

  const opts = {
    height: '460px',
    width: '1120px',
    playerVars: {
      autoplay: 1,
    },
  };

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

      {/* phantrang */}
      <div className='d-flex w-100 mt-3 align-items-center'>
        <h4 className='movie ms-2 me-3'>PHIM</h4> 
        <p className={`type-movie ms-3 me-3 ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>Đang Chiếu</p>
        <p className={`type-movie ms-1 ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>Sắp Chiếu</p>
      </div>

      <div className='row gx-5 mt-4'>
          <div className="card col-lg-3 col-md-6 border-0" >
              <img onClick={goToPageHandle} src="img/phim1.jpg" style={{ width: "auto", height:"80%" }} className="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
              <div onClick={goToPageHandle} className="card-body">
                <h6 className="d-flex justify-content-center mt-2">Đất Rừng Phương Nam</h6>
              </div>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' className="btn btn-danger ">
                  <i class="fa-solid fa-money-bill fa-flip me-1"></i>
                  Mua Vé
                </Link>
                <button 
                  className="btn btn-outline border border-1 border-primary"
                  onClick={playTrailerHandle}>
                  <i class="fa-solid fa-play fa-beat me-1"></i>
                  Trailer
                </button>
                  {isPlaying && (
                  <YouTube 
                    style={{display:'block',zIndex:1,position:'absolute',top:'8px',left:'calc(10% - 6px)'}} 
                    videoId={videoId} 
                    opts={opts} 
                    onReady={(e)=> {
                      e.target.pauseVideo();
                    }}
                    />
                  )}
              </div>
          </div>
          <div className="card col-lg-3 col-md-6 border-0">
            <img src="img/phim2.jpg" style={{ width: "auto", height:"80%" }} className="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div className="card-body">
              <h6 className="d-flex justify-content-center mt-2">Quỷ Môn Quan: Gọi Hồn</h6>
            </div>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' className="btn btn-danger">Mua Vé</Link>
                <a href="#!" className="btn btn-primary">Trailer</a>
              </div>
          </div>
          <div className="card col-lg-3 col-md-6 border-0">
            <img src="img/phim3.jpg" style={{ width: "auto", height:"80%" }} className="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div className="card-body">
              <h6 className="d-flex justify-content-center mt-2">Năm Đêm Kinh Hoàng</h6>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' className="btn btn-danger">Mua Vé</Link>
                <a href="#!" className="btn btn-primary">Trailer</a>
              </div>
            </div>
          </div>
          <div className="card col-lg-3 col-md-6 border-0">
            <img src="img/phim4.jpg" style={{ width: "auto", height:"80%" }} className="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div className="card-body">
              <h6 className="d-flex justify-content-center mt-2">Âm Hồn Đô Thị</h6>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' className="btn btn-danger">Mua Vé</Link>
                <a href="#!" className="btn btn-primary">Trailer</a>
              </div>
            </div>
          </div>
          <div className="card col-lg-3 col-md-6 border-0">
            <img src="img/phim5.jpg" style={{ width: "auto", height:"80%" }} className="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div className="card-body">
              <h6 className="d-flex justify-content-center mt-2">Người Vợ Cuối Cùng</h6>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' className="btn btn-danger">Mua Vé</Link>
                <a href="#!" className="btn btn-primary">Trailer</a>
              </div>
            </div>
          </div>
          <div className="card col-lg-3 col-md-6 border-0">
            <img src="img/phim6.jpg" style={{ width: "auto", height:"80%" }} className="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div className="card-body">
              <h6 className="d-flex justify-content-center mt-2">Vầng Trăng Máu</h6>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' className="btn btn-danger">Mua Vé</Link>
                <a href="#!" className="btn btn-primary">Trailer</a>
              </div>
            </div>
          </div>
          <div className="card col-lg-3 col-md-6 border-0">
            <img src="img/phim7.jpg" style={{ width: "auto", height:"80%" }} className="card-img-top rounded mt-2" alt="Fissure in Sandstone"/>
            <div className="card-body">
              <h6 className="d-flex justify-content-center mt-2">Quỷ Ám : Tín Đồ </h6>
              <div className='d-flex justify-content-evenly'>
                <Link to='/tickets/buy' className="btn btn-danger">Mua Vé</Link>
                <a href="#!" className="btn btn-primary">Trailer</a>
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