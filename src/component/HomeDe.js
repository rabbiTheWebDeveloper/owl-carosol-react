import React from 'react';

const HomeDe = (props) => {
    const {id,email,name}=props.data
    return (
        <div>
            <h1>Id : {id}</h1>
            <h2>Name :  {name} </h2>
            <p>{email}</p>
        </div>
    );
};

export default HomeDe;