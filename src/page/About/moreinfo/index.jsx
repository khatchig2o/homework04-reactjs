import React from "react";

export default function Moreinfo({ information }) {
    return <div className='P-information'>
        <img src={information.img} alt="img" />
        <p>{information.text}</p>
        <button style={{ backgroundColor: information.bColor }}>Read More</button>
    </div>
}