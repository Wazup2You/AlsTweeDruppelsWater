import "./App.css";
import { Button } from "./components/Button/Component";

function App() {
  return (
    <div className=" w-screen h-screen bg-blue-oasen">
      <h1 className="">
        In deze file komen de components uit het components mapje
      </h1>
      <Button text="hoi" onClick={() => alert("test")} />
    </div>
  );
}

export default App;
