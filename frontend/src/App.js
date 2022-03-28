import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Component";

function App() {
  const [scene, setScene] = useState(0);

  return (
    <div>
      <div className=" w-screen h-screen bg-white flex flex-col items-center justify-center ">
        <h1 className="w-200 h-20 text-center">{scene === 0 ? "Intrigerende en Pakkende titel" : scene === 1 ? "Test je kennis" : scene === 2 ? "Tips" : scene === 3 ? "Visuals" : ""}
        </h1>
        <h3 className="w-200 h-20 text-center">{scene === 0 ? "Intrigerende en Pakkende ondertitel" : scene === 1 ? "Intrigerende en Pakkende ondertitel 2" : scene === 2 ? "Intrigerende en Pakkende ondertitel 3" : scene === 3 ? "Intrigerende en Pakkende ondertitel 4" : ""}
        </h3>
        <div classname="">
          <div className={scene === 1 ? "hidden" : "block"} >
            <Button text="Test je kennis" onClick={() => setScene(1)} />
          </div>
          <div className={scene === 2 ? "hidden" : "block"} >
            <Button text="Tips" onClick={() => setScene(2)} />
          </div>
          <div className={scene === 3 ? "hidden" : "block"} >
            <Button text="Visuals" onClick={() => setScene(3)} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className={scene === 1 ? "block" : "hidden"} >
            <Button text="oasen Drinkwater" onClick={() => ""} />
          </div>
          <div className={scene === 1 ? "block" : "hidden"} >
            <Button text="Store Drinkwater" onClick={() => ""} />
          </div>
        </div>
      </div>
    </div>
  );
}




export default App;
