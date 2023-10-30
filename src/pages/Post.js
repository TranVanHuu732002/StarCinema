import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Post() {
    const { id }= useParams()
    // const [title,setTitle] = useState()
    // const [postText,setPostText] = useState()
    // const [username,setUsername] = useState()
    // const navigate = useNavigate()

    useEffect(() =>{
        axios.get('http://localhost:3001/posts/byId'+id)
        .then((response) => {
            console.log(response)
        }) 
        .catch(err => console.log(err))
    },[])

    // function Update(e) {
    //     e.preventDefault();
    //     axios.put("http://localhost:3001/posts/update"+id,{title, postText , username })
    //     .then(result => {
    //         console.log(result)
    //         navigate('/')
    //     })
    //     .catch(err => console.log(err))
    // }

  return (
    <div>{id}</div>
    // <div className="d-flex bg-primary justify-content-center align-item-center">
    //         <div className="rounded bg-white m-5 w-50">
    //             <form className="m-4" onSubmit={Update}>
    //                 <h2>Create Post</h2>
    //                 <div className="mb-3 align-item-center form-outline">
    //                     <label className="form-label" htmlFor="">Title</label>
    //                     <input 
    //                         className="form-control" 
    //                         type="text" 
    //                         placeholder="Enter Title"
    //                         onChange={(e) => setTitle(e.target.value)}
    //                     />
    //                 </div>

    //                 <div className="form-outline mb-3 align-item-center">
    //                     <label htmlFor="" className="form-label">PostText</label>
    //                     <input 
    //                         type="text" 
    //                         className="form-control" 
    //                         placeholder="Enter PostText"
    //                         onChange={(e) => setPostText(e.target.value)}
    //                     />
    //                 </div>
    //                 <div className="form-outline mb-3 align-item-center">
    //                     <label htmlFor="" className='form-label'>UserName</label>
    //                     <input 
    //                         type="text"
    //                         className="form-control" 
    //                         placeholder="Enter UserName"
    //                         onChange={(e) => setUsername(e.target.value)}
    //                     />
    //                 </div>
    //                 <button className="btn btn-primary">Create</button>
    //             </form>
                
    //         </div>   
    // </div>
  )
}

export default Post