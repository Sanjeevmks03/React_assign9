import { useState } from "react"
import React from 'react'
import axios from "axios";

function Post() {
    const [posts, setposts] = useState({
        firstname: '',
        email: '',
        lastname: '',
        phone: '',

    });

    // const handleChange = (event) => {
    //     setposts([event.target.name]=event.target.value);
    // };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setposts(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://run.mocky.io/v3/a2eebe62-c28f-478d-a8e3-523e589eb31f', posts)
            .then(response => {
                console.log('Update successful.');
                console.log(posts.firstname);
                console.log(posts.lastname);
                console.log(posts.email);
                console.log(posts.phone);
                response.first_name = posts.firstname
                response.last_name = posts.lastname
                response.email = posts.email
                response.phone_number = posts.phone
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>From Post Request</h1>
            <div className='row' >
                <div className='col-4'></div>
                <div className='col-4'>
                    <form onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input type="text" name="firstname" value={posts.firstname} className="form-control" onChange={handleChange} />

                        <label>Address:</label>
                        <input type="text" name="lastname" value={posts.lastname} className="form-control" onChange={handleChange} />

                        <label>Email:</label>
                        <input type="email" name="email" value={posts.email} className="form-control" onChange={handleChange} />
                        <label>Phone:</label>
                        <input type="tel" name="phone" value={posts.phone} className="form-control" onChange={handleChange} />

                        <button type="submit" className="btn btn-warning mt-3">Submit</button>
                    </form>
                </div>
                <div className='col-4'></div>
            </div>
        </div>
  );
}

export default Post