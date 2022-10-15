import React from "react"
import facebook from "../images/Facebook Icon.png"
import github from "../images/GitHub Icon.png"
import instagram from "../images/Instagram Icon.png"
import twitter from "../images/Twitter Icon.png"

export default function Footer(){
    return(
        <div className="main foot">
         <a href="#" className="footy" target="-blank" > <img  src={facebook} alt="my alternate"/></a>
          <a href="https://github.com/Leadola1" className="footy" target="-blank"><img  src={github} alt="my alternate"/></a>
          <a href="https://www.instagram.com/leadola/" className="footy" target="-blank"><img  src={instagram} alt="my alternate"/></a>
         <a href="https://twitter.com/Basitlawal7" className="footy" target="-blank"> <img  src={twitter} alt="my alternate"/></a>
          
        </div>
    )
}