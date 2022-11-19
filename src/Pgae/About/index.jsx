import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/about-01.jpg"
import img2 from "../../assets/images/about-02.jpg"
import img3 from "../../assets/images/about-03.jpg"
import img4 from "../../assets/images/about-04.jpg"
import background from "../../assets/images/about-background.jpg"
import svg1 from "../../assets/images/unknown.svg"
import svg2 from "../../assets/images/drink.svg"
import svg3 from "../../assets/images/plant.svg"
import lastpic from "../../assets/images/about-lastpic.jpg"
import Peapol from "./Peapol";
import TitleComponent from "../../components/title-component";
import Moreinfo from "./moreinfo";
import EndingComponent from "../../components/ending-component";

export default function About() {
  const [peapol, setpeapol] = useState([])
  const [info, setinfo] = useState([])
  useEffect(() => {
    setpeapol([
      {
        "img": img1,
        "Name": "Jennifer Soft",
        "position ": "Founder and CEO",
        "info": "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
        "facebook": "true",
        "twitter": "true",
        "instagram": "true"
      },
      {
        "img": img2,
        "Name": "Daisy Walker",
        "position ": "Executive Chef",
        "info": "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
        "facebook": "true",
        "twitter": "true",
      },
      {
        "img": img3,
        "Name": "Florence Nelson",
        "position ": "Kitchen Manager",
        "info": "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
        "facebook": "true",
        "instagram": "true"
      },
      {
        "img": img4,
        "Name": "Valentina Martin",
        "position ": "Culinary Director",
        "info": "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
        "facebook": "https://ar-ar.facebook.com/",
        "twitter": "true",
        "instagram": "true",
        "Youtube": "true"
      }
    ])
    setinfo([
      {
        img: svg1,
        text: "Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.",
        bColor: "#2D99CC"
      },
      {
        img: svg2,
        text: "Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.",
        bColor: "#319966"
      },
      {
        img: svg3,
        text: "Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.",
        bColor: "#993332"
      }
    ])
  }, [])
  return <>

    <TitleComponent title='About Simple House'
      description='This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.' />

    <section className="G-container G-flex-wrap">
      {peapol.map((one, index) => (
        <Peapol
          key={index}
          person={one}
        />
      ))}
    </section>

    <section className="G-container">
      <div className='P-about-background G-backgroundimg' style={{ backgroundImage: `url(${background})` }} />
    </section>

    <section className='G-container G-flex-wrap'>
      {info.map((information, index) => (
        <Moreinfo
          key={index}
          information={information}
        />
      ))}
    </section>
    <EndingComponent
      img={lastpic}
      header={'History of our restaurant'}
      paragraph={'Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.'}
      paragraph2={"Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis."}
    />
  </>
}