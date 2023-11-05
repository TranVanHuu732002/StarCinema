import React from 'react'
import './Details.css'

function Details() {
  return (
    <div>
      <div className="carousel-inner me-1 ms-1 mt-2 carousel-item active">
            <img src="img/banner1.jpg" className="d-block image" alt="..."/>
            <button className='btn-icon btn btn-outline'>
            <i class="fa-solid fa-play icon"></i></button>
      </div>
      <div className='details mb-2'>
        
        <img src="img/phim2.jpg" style={{ width: "auto", height:"400px" }} className="card-img-top rounded" alt="Fissure in Sandstone"/>
      
        <div>
          <h6 className="mt-2">Quỷ Môn Quan: Gọi Hồn</h6>
        
        </div>
        
        
      </div>
    </div>
  )
}

export default Details