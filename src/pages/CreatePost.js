import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreatePost() {
    const [title,setTitle] = useState()
    const [postText,setPostText] = useState()
    const [username,setUsername] = useState()
    const navigate = useNavigate()

    function Submit(e) {
        e.preventDefault();
        axios.post("http://localhost:3001/posts",{title, postText , username})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="d-flex bg-primary justify-content-center align-item-center">
            <div className="rounded bg-white m-5 w-50">
                <form className="m-4" onSubmit={Submit}>
                    <h2>Create Post</h2>
                    <div className="mb-3 align-item-center form-outline">
                        <label className="form-label" htmlFor="">Title</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Enter Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="form-outline mb-3 align-item-center">
                        <label htmlFor="" className="form-label">PostText</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter PostText"
                            onChange={(e) => setPostText(e.target.value)}
                        />
                    </div>
                    <div className="form-outline mb-3 align-item-center">
                        <label htmlFor="" className='form-label'>UserName</label>
                        <input 
                            type="text"
                            className="form-control" 
                            placeholder="Enter UserName"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
                
            </div>   
    </div>
  )
}

export default CreatePost