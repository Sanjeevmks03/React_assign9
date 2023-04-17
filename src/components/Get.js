import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Get() {
  const [Posts, setPosts] = useState({});

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/a2eebe62-c28f-478d-a8e3-523e589eb31f')
      .then(response => {
        console.log(response.data)
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
        <ul>
            <li>First_name: {Posts.first_name}</li>
            <li>Last Nmae: {Posts.last_name}</li>
            <li>Contact: {Posts.phone_number}</li>
            <li>Email: {Posts.email}</li>
            <li>Gender: {Posts.gender}</li>
        </ul>
    </div>
  );
}

export default Get