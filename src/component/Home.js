import React, { useEffect, useState } from 'react';
import HomeDe from './HomeDe';

const Home = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    
  
    return (
        <div>
            {
                data.map(data => <HomeDe data={data}></HomeDe>)
            }
        </div>
    );
};

export default Home;