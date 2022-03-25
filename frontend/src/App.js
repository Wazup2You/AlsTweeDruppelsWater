import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Component";

function App() {
  const [text, setText] = useState("hoi")

  return (
    <div className=" w-screen h-screen bg-blue-oasen">
      <h1 className="">
        In deze file komen de components uit het components mapje
      </h1>
      
      <Button text={text} onClick={() => setText("test")} />

    </div>
  );
}

export default App;
