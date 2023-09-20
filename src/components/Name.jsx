import React from 'react'

const fname = "Navneet";
const lname = "gupta";

function Name(){
    return (
        <h2 className="heading"> {`${fname} ${lname}`} </h2>
    );
}

export default Name;