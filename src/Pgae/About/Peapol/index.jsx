import React from "react";

import facebook from "../../../assets/images/icons8-facebook.svg"
import twitter from "../../../assets/images/icons8-twitter.svg"
import instagram from "../../../assets/images/icons8-instagram.svg"
import Youtube from "../../../assets/images/icons8-youtube.svg"

export default function Peapol({ person }) {

    return <div className='G-flex P-person-container'>
        {person.img ? <img src={person.img} alt="info" /> : <></>}
        <div className='p-person-info'>
            <h2>{person.Name}</h2>
            <h3>{person.position}</h3>
            <p>{person.info}</p>
            {person.facebook ? <a target='_blank' rel="noreferrer" href={person.facebook}><img src={facebook} alt="facbook" /></a> : <></>}
            {person.twitter ? <a target='_blank' rel="noreferrer" href={person.twitter}><img src={twitter} alt="twitter" /></a> : <></>}
            {person.instagram ? <a target='_blank' rel="noreferrer" href={person.instagram}><img src={instagram} alt="instagram" /></a> : <></>}
            {person.Youtube ? <a target='_blank' rel="noreferrer" href={person.Youtube}><img src={Youtube} alt="Youtube" /></a> : <></>}
        </div>
    </div>
}