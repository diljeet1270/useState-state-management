import React, {useState} from "react";
import imagesData from "../Data/imageData";
const ImageGallery =({addClickedImage})=>{

    return (
        <div>
            {
                imagesData.map((image)=>(
                    <img src={image.img_url} alt={image.alt}
                    onClick={()=>addClickedImage(image)}/>
                   
                ))
            }
        </div>
    )
}
export default ImageGallery 
