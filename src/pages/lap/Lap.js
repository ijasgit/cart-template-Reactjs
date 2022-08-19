import React from 'react'
import "./lap.css"
// import img1 from "./lap-images/hp-img.png"


const Lap = (param) => {


    return (
        <div className='cart-box'>
            <div>
                <img src={param.obj.image} alt="lab"></img>
                <h2>Lap-Name:{param.obj.name}</h2>
                <h2>Lap-Type:{param.obj.type}</h2>
                <h2>LapPrice:RS.{param.obj.price}</h2>
                <br></br>
            </div>
            
        </div>
    )

}

export default Lap