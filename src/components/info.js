import React from "react"
import img from '../images/img22.jpg'
import mail from '../images/Mail.png'
import vector from '../images/Vector.png'

function Info(){
    return(
        <div className="Info-main-div main">
            <img className="Info-image" src={img} alt="my alternate"/>
            <h1 className="Info-h1">Olamide Lawal</h1>
            <p className="Info-p">Frontend Developer</p>
            <p className="Info-p2">olamidelawal.website</p>
           <a href= "mailto:lawalbasit1105@gmail.com" target="-blank"> <button className="email">Email</button></a>
            <img className="mail-button-icon" src={mail} alt="email"/>
            <a href="https://www.linkedin.com/in/basit-olamide-lawal-9197a01a0/" target="-blank">  <button className="linkedin"> LinkedIn</button></a>
            <img className="vector-button-icon" src={vector} alt="vector"/>
        </div>
    )
}

export default Info