import React from 'react'
import Lap from '../lap/Lap'
import "./main.css"
import img1 from "./lap-images/hp-img.png"
import img3 from "./lap-images/dell-img.png"
import img2 from "./lap-images/mac-img.jpg"


const Main = () => {
    var products = [{ image: img1, name: "HP", type: "ssd", price: "40,000", value: 1 },
    { image: img2, name: "MAC", type: "Hard disk", price: "40,000", value: 2 },
    { image: img3, name: "DELL", type: "ssd", price: "40,000", value: 3 }, { image: img3, name: "DELL", type: "ssd", price: "40,000", value: 4 }, { image: img3, name: "DELL", type: "ssd", price: "40,000", value: 5 }, { image: img3, name: "DELL", type: "ssd", price: "40,000", value: 6 },]
    // var obj = products.map(data)
    return (
        <div className='cart2'>
            {products.map((data) => (
                <Lap obj={data} key={data.value} />
            ))}
        </div>

        // <Lap pd={obj}/>
    )
}

export default Main