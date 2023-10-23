import { useState } from "react"
import memesData from "../memesdata"

export default function Meme() {

    const [memeImage, setMemeImage] = useState("https://i.imgflip.com/3si4.jpg")
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main className="main">
            <div>
                <div className="main-input">
                    <input 
                        className="main-input-1"
                        placeholder="Shut up"
                        type="text">
                    </input>
                    <input 
                        className="main-input-2"
                        placeholder="and take my money"
                        type="text">
                    </input>
                </div>
                <button className="main-button" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <img src={memeImage} alt="" className="main-img"/>
        </main>
    )
}