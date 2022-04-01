import "./App.css";
import React, { lazy, Suspense } from "react";

const WaterDrop = lazy(() => import("./components/Drop/Component"));
const PlasticDrop = lazy(() => import("./components/PlasticDrop/Component"));
const WaterShader = lazy(() => import("./components/WaterShader/Component"));

function App() {
  return (
    <Suspense fallback={<div>loading....</div>}>
      <div className=" w-screen h-screen bg-blue-oasen overflow-hidden">
        <WaterShader />
        <div className="absolute flex top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen">
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative w-[30rem] h-[40rem]">
              <WaterDrop />
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative w-[30rem] h-[40rem]">
              <PlasticDrop />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
