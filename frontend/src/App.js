import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Component";

function App() {
  const [scene, setScene] = useState(0);
  const [color, setColor] = useState("blue-oasen");

  return (
    <div>
      {/*titels*/}
      <div className=" w-screen h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="w-200 h-20 text-center">{scene === 0 ? "Visuals" : scene === 1 || scene === 4 || scene === 5 ? "Test je kennis" : scene === 2 ? "Tips" : scene === 3 ? "Vergelijk het water" : ""}
        </h1>
        <h3 className="w-200 h-20 text-center">{scene === 0 ? "Intrigerende en Pakkende ondertitel" : scene === 1 || scene === 4 || scene === 5 ? "Intrigerende en Pakkende ondertitel 2" : scene === 2 ? "Intrigerende en Pakkende ondertitel 3" : scene === 3 ? "Intrigerende en Pakkende ondertitel 4" : ""}
        </h3>

        {/*navigatie*/}
        <div className="">
          <div className={scene === 0 ? "hidden" : "block"} >
            <Button text="Visuals" onClick={() => setScene(0)} />
          </div>
          <div className={scene === 1 || scene === 4 || scene === 5 ? "hidden" : "block"} >
            <Button text="Test je kennis" onClick={() => setScene(1)} />
          </div>
          <div className={scene === 2 ? "hidden" : "block"} >
            <Button text="Tips" onClick={() => setScene(2)} />
          </div>
          <div className={scene === 3 ? "hidden" : "block"} >
            <Button text="Vergelijk het water" onClick={() => setScene(3)} />
          </div>
        </div>

        {/*quiz*/}
        <div className="w-10/12 flex justify-between">
          <div className={scene === 1 || scene === 4 || scene === 5 ? "block" : "hidden"} >
            <Button text="oasen Drinkwater" onClick={() => setScene(4)} />
          </div>
          <div className={`${scene === 1 || scene === 4 || scene === 5 ? "block" : "hidden"} bg-${color}`} >
            < Button text="Store Drinkwater" onClick={() => { setScene(5); setColor("red-500") }} />
          </div>
        </div>

        {/*tips*/}
        {/* <div className={scene === 2 ? "block" : "hidden"} >
            <Button text="Nieuwe tip" onClick={() => ""} />
          </div> */}

        <div className="w-10/12 flex justify-between">
          <div className={scene === 2 ? "inline" : "hidden"} >
            <p>Een hele interesante tip</p>
          </div>
          <div className={scene === 2 ? "inline" : "hidden"} >
            <p>Een hele interesante tip</p>
          </div>
        </div>

      </div>
    </div >
  );
}

export default App;