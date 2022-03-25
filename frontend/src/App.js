import "./App.css";
import { WaterDrop } from "./components/Drop/Component";
import { WaterShader } from "./components/WaterShader/Component";
function App() {
  return (
    <div className=" w-screen h-screen bg-blue-oasen overflow-hidden">
      <WaterShader />
      <div className="absolute flex top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen">
        <div className="w-1/2 flex justify-center">
          <div className="relative w-[60rem] h-[70rem]">
            <WaterDrop />
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="relative w-[60rem] h-[70rem]">
            <WaterDrop />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
