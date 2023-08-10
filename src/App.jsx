import { useState } from 'react'
import './App.css'
import ImageGallery from '../components/ImageGallary'
import ImageInfo from '../components/ImageInfo';

function App() {
  const [clickedImage, setClickedImage] = useState("");
  // console.log(clickedImage.alt);

  return (
    <>
      <div>
        <ImageGallery addClickedImage={setClickedImage}/>
        <ImageInfo imagePassed={clickedImage}/>
      </div>
    </>
  )
}

export default App
