import React from "react";

export default function EndingComponent({ img, header, paragraph, paragraph2 }) {
    return <section className='section3 G-flex G-container'>
        <img src={img} alt="avocado" />
        <div>
            <h2>{header}</h2>
            <p>{paragraph}</p>
            {paragraph2 ? <p>{paragraph2}</p> : <button type="submit">Read more</button>}
        </div>
    </section>
}