import "./App.css";
import React, { lazy, Suspense, useState } from "react";
import videoClean from "./videos/clean.mp4";
import videoDirty from "./videos/bottle.mp4";
import videoTip1 from "./videos/water.mp4";
import videoTip2 from "./videos/water.mp4";

const WaterDrop = lazy(() => import("./components/Drop/Component"));
const WaterShader = lazy(() => import("./components/WaterShader/Component"));
const WaterDropVideo = lazy(() => import("./components/DropVideo/Component"));

function App() {
  const [scene, setScene] = useState(1);

  const scenes = {
    0: {
      video1: videoClean,
      video2: videoDirty,
    },
    3: {
      video1: videoTip1,
      video2: videoTip2,
    },
  };

  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen bg-blue-oasen flex justify-center items-center">
          <h1 className="oasenwhite">loading....</h1>
        </div>
      }
    >
      <div className=" w-screen h-screen bg-blue-oasen overflow-hidden">
        <WaterShader />

        <div className="absolute flex top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen">
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative  h-[40rem]">
              {scene === 0 || scene === 3 ? (
                <WaterDropVideo videoUrl={scenes[scene].video1} />
              ) : scene === 1 ? (
                <WaterDrop />
              ) : null}
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative  h-[40rem]">
              {scene === 0 || scene === 3 ? (
                <WaterDropVideo videoUrl={scenes[scene].video2} />
              ) : scene === 1 ? (
                <WaterDrop />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
