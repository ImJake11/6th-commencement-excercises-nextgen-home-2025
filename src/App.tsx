import { useCallback, useState } from "react";
import "./App.css";
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
import img23 from "./assets/23.webp";
import refreshLogo from "./assets/refresh-svgrepo-com.svg";
import toggleLogo from "./assets/next-svgrepo-com.svg";


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
    img23,
  ];
  const [flippedPages, setFlippedPages] = useState<number[]>([]);

  const handleNext = () => {
    setFlippedPages((prev) => {
      const listLength = flippedPages.length;

      if (prev.length < imgs.length - 1) {
        return [...prev, listLength];
      }
      return prev;
    });
  };

  const handlePrevious = () => {
    setFlippedPages((prev) => prev.slice(0, -1));
  };

  const handleReset = useCallback(() => {
    const timer = setInterval(() => {
      setFlippedPages((prev) => {
        if (prev.length > 0) {
          return prev.slice(0, -1);
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 250);

    return () => clearInterval(timer);
  }, [setFlippedPages]);

  const controls = (
    <div className="controls">
      <button
        className="prev-button"
        onClick={handlePrevious}
        disabled={flippedPages.length === 0}
      >
        {" "}
        <img src={toggleLogo} alt="logo" width={30} />
      </button>
      <button
        className="reset-button"
        onClick={handleReset}
        disabled={flippedPages.length === 0}
      >
        {" "}
        <img src={refreshLogo} alt="logo" width={30} />
      </button>
      <button
        className="next-button"
        onClick={handleNext}
        disabled={flippedPages.length === imgs.length - 1}
      >
        {" "}
        <img src={toggleLogo} alt="logo" width={30} />
      </button>
    </div>
  );

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#eeeeee",
        margin: "0",
        overflowY: "auto",
      }}
    >
      <div className="pad">
        {imgs.map((img, index) => (
          <div
            key={index}
            className={`page ${flippedPages.includes(index) ? "flipped" : ""}`}
            style={{ zIndex: imgs.length - index }} // Ensure pages stack properly
          >
            <div className="page-content">
              <img src={img} alt="image" height={500} />
            </div>
          </div>
        ))}
      </div>
      {/** SPACER */}
      <div
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "end", 
          fontSize: "18px",
          fontWeight: "400",
          opacity: ".5"
        }}
      >
        {flippedPages.length + 1} / {imgs.length}
      </div>
      {/** BUTTONS */}
      {controls}
    </div>
  );
}

export default App;
