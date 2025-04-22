import {  useState } from 'react'
import './App.css'
import "./styles/styles.css";
import img1 from "./assets/1.webp";
import img2 from "./assets/2.webp";
import img3 from "./assets/3.webp";    
import img4 from "./assets/4.webp";
import img5 from "./assets/5.webp";
import img6 from "./assets/6.webp";
import img7 from "./assets/7.webp";   
import img8 from "./assets/8.webp";
import img9 from "./assets/9.webp";
import img10 from "./assets/10.webp";    
import img11 from "./assets/11.webp";
import img12 from "./assets/12.webp";
import img13 from "./assets/13.webp";
import img14 from "./assets/14.webp";   
import img15 from "./assets/15.webp";
import img16 from "./assets/16.webp";
import img17 from "./assets/17.webp";    
import img18 from "./assets/18.webp";
import img19 from "./assets/19.webp";
import img20 from "./assets/20.webp";
import img21 from "./assets/21.webp";
import img22 from "./assets/22.webp";   
import logo from "./assets/logo.png";



function App() {

  const imgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
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

const handleReset = () => {
setFlippedPages([]);
}

    return (
       <div style={{
        width: "100vw",
        height: "100vh",
        position:"relative",
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#eeeeee",
        margin: "0",
        gap: "40px",
       }}>

        {/** LOGO */}
        <img src={logo} alt="logo" width={40} />


         <div className="pad">
            <div className="book">
                {imgs.map((img, index) => (
                    <div
                        key={index}
                        className={`page ${flippedPages.includes(index) ? "flipped" : ""}`}
                        style={{ zIndex: imgs.length - index }} // Ensure pages stack properly
                    >
                        <div className="page-content"><img src={img} alt="image"/></div>
           
                    </div>
                ))}
            </div>
          
        </div>
          {/** BUTTONS */}

          <div className="controls">
              <button className="prev-button" onClick={handlePrevious} disabled={flippedPages.length === 0}>Previous</button>
              <button className='reset-button' onClick={handleReset} disabled={flippedPages.length === 0}>Reset</button>
              <button className='next-button' onClick={handleNext} disabled={flippedPages.length === ( imgs.length - 1 )}>Next</button>
            </div>
       </div>
    );
}

export default App
