import React, {useState} from "react";
import imagesData from "../Data/imageData";
const ImageGallery =()=>{

    return (
        <div>
            {
                imagesData.map((image, value)=>(
                    <img src={image.img_url} alt={image.alt}/>
                ))
            }
        </div>
    )
}
export default ImageGallery 