import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Component";

function App() {
  const [scene, setScene] = useState(0);

  return (
    <div className="w-screen h-screen bg-blue-oasen">
      <h1 className="text-center">
        {scene === 0 ?  "scene 1" : scene === 1 ? "scene 2" : scene === 2 ? "scene 3" : ""}
      </h1>

      <div className="flex flex-col">
        <Button text="scene 1" onClick={() => setScene(0)} />

        <Button text="scene 2" onClick={() => setScene(1)} />

        <Button text="scene 3" onClick={() => setScene(2)} />
      </div>

    </div>
  );
}

export default App;
