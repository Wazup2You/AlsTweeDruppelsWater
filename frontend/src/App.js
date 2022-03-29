import "./App.css";
import React, { lazy, Suspense } from "react";

const WaterDrop = lazy(() => import("./components/Drop/Component"));
const WaterShader = lazy(() => import("./components/WaterShader/Component"));
const WaterDropVideo = lazy(() => import("./components/DropVideo/Component"));

function App() {
  return (
    <Suspense fallback={<div>loading....</div>}>
      <div className=" w-screen h-screen bg-blue-oasen overflow-hidden">
        <WaterShader />
        <div className="absolute flex top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen">
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative  h-[40rem]">
              <WaterDropVideo />
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative  h-[40rem]">
              <WaterDrop />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
