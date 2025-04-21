import {  useState } from 'react'
import './App.css'
import "./styles/styles.css";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";    
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";

function App() {

  const imgs = [
    img1,
   img2,
    img3,
    img4,
    img5,
  ];
  const [flippedPages, setFlippedPages] = useState<number[]>([]);

 const handleNext = () => {

  setFlippedPages((prev)=> {
    
  const listLength = flippedPages.length;


    if(prev.length < (imgs.length -1)){
      return [...prev, listLength];
    } return prev;
  })
 }

const handlePrevious = () => {  
    setFlippedPages((prev) => prev.slice(0,-1));
}

    return (
        <div className="pad">
            <div className="book">
                {imgs.map((img, index) => (
                    <div
                        key={index}
                        className={`page ${flippedPages.includes(index) ? "flipped" : ""}`}
                        style={{ zIndex: imgs.length - index }} // Ensure pages stack properly
                    >
                        <div className="page-content"><img src={img} alt="image"/></div>
                        <div className="page-shadow"></div>
                    </div>
                ))}
            </div>
            {/** BUTTONS */}

            <div className="controls">
              <button className="prev-button" onClick={handlePrevious}>Previous</button>
              <button className='next-button' onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default App
