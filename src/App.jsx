import { useState, useEffect } from "react";
import pauseMobile from "./assets/images/pattern-divider-mobile.svg";
import pauseDesktop from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";

function App() {
  const [text, setText] = useState([]);

  const fetchApiData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setText(data);
        console.log(text);
        //  console.log(data);
      });
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Advice #{text.slip.id}</h1>
        <p>{text.slip.advice}</p>
        <section>
          <div>
            <img className="hidden md:block" src={pauseDesktop} />
            <img className="block md:hidden" src={pauseMobile} />
          </div>
        </section>

        <div>
          <button onClick={fetchApiData}>
            <img src={dice} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
