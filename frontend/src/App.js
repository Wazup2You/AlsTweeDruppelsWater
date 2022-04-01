import "./App.css";
import React, { lazy, Suspense, useState } from "react";
import { Button } from "./components/Button/Component";
import kraanwater from "./img/kraanwater.png";
import flesje from "./img/fles.png";
import videoClean from "./videos/clean.mp4";
import videoDirty from "./videos/bottle.mp4";
import videoTip1 from "./videos/tip1.mp4";
import videoTip2 from "./videos/tip2.mp4";
import WaterDropPlastic from "./components/DropPlastic/Component";

const WaterDrop = lazy(() => import("./components/Drop/Component"));
const WaterShader = lazy(() => import("./components/WaterShader/Component"));
const WaterDropVideo = lazy(() => import("./components/DropVideo/Component"));

function App() {
  const [scene, setScene] = useState(0);

  const scenes = {
    // visuals
    0: {
      title: "Hoe bewust ben jij?",
      video1: videoClean,
      video2: videoDirty,
    },
    // moleculen
    1: {
      title: "Klik en sleep de druppels voor meer informatie",
    },
    // Quiz
    2: {
      title: "Welk water is goedkoper?",
      quizText:
        "Met kraanwater ben je per liter meer dan 500 keer goedkoper uit!",
    },
    // tips
    3: {
      title: "Tips om beter gebruik te maken van water",
      video1: videoTip1,
      video2: videoTip2,
    },
  };

  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen bg-blue-oasen flex justify-center items-center">
          <h1 className="oasenwhite">Aan het laden....</h1>
        </div>
      }
    >
      <div className=" w-screen h-screen bg-blue-oasen overflow-hidden">
        <WaterShader />

        <div className="absolute left-1/2 -translate-x-1/2 bottom-3/4">
          <h1 className="text-center oasenh1">Als twee druppels water</h1>
          <h3 className="text-center font-stradaLight text-white p-4 text-3xl">
            {scene !== 4 ? scenes[scene].title : scenes[2].quizText}
          </h3>
        </div>

        <div
          className={
            scene === 4
              ? "block absolute left-1/2 -translate-x-1/2 top-3/4"
              : "hidden"
          }
        >
          <p className="p-10 text-center w-96 text-white text-xl">
            Wij zijn van mening dat water betaalbaar moet zijn voor iedereen en
            maken hier werk van.
          </p>
        </div>

        <div className="absolute flex top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen">
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative  h-[40rem] flex justify-center items-center">
              {scene === 0 || scene === 3 ? (
                <WaterDropVideo videoUrl={scenes[scene].video1} />
              ) : scene === 1 ? (
                <WaterDrop />
              ) : (
                <>
                  <div className="w-48 h-full flex justify-center items-center">
                    <img src={kraanwater} alt="Kraanwater"></img>
                    <h1
                      className={
                        scene === 4
                          ? " p-5 text-green-500 text-5xl font-strada absolute"
                          : "hidden"
                      }
                    >
                      €0,00117
                    </h1>
                  </div>
                  <div
                    className={
                      scene === 2 || scene === 4
                        ? "block absolute bottom-0 left-1/4 -translate-x-1/4"
                        : "hidden"
                    }
                  >
                    <Button
                      text="Oasen kraanwater"
                      color="green"
                      onClick={() => setScene(4)}
                      scene={scene}
                    />
                  </div>
                </>
              )}
            </div>
            <p
              className={
                scene === 3
                  ? "block text-center absolute text-white font-stradaLight top-3/4 p-6 text-xl w-96"
                  : "hidden"
              }
            >
              Kraanwater kan schaars zijn in de zomermaanden. Wees er deze
              maanden extra zuinig mee.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative h-[40rem] flex justify-center items-center">
              {scene === 0 || scene === 3 ? (
                <WaterDropVideo videoUrl={scenes[scene].video2} />
              ) : scene === 1 ? (
                <WaterDropPlastic />
              ) : (
                <>
                  <div className="w-64 h-full flex justify-center items-center flex-col">
                    <img src={flesje} alt="Water uit plastic flesje"></img>
                    <h1
                      className={
                        scene === 4
                          ? " p-5 text-red-500 text-5xl font-strada absolute"
                          : "hidden"
                      }
                    >
                      €0,70
                    </h1>
                  </div>
                  <div
                    className={
                      scene === 2 || scene === 4
                        ? "block absolute bottom-0 left-1/4 -translate-x-1/4"
                        : "hidden"
                    }
                  >
                    <Button
                      text="Flesje drinkwater"
                      onClick={() => setScene(4)}
                      color="red"
                      scene={scene}
                    />
                  </div>
                </>
              )}
              <p
                className={
                  scene === 3
                    ? "block text-center absolute text-white font-stradaLight top-3/4 p-6 text-xl w-96"
                    : "hidden"
                }
              >
                Door minder lang of vaak te douchen en je tuin schoon te
                spuiten, help je water tekorten te voorkomen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
        <div className={scene === 0 ? "hidden" : "block"}>
          <Button text="Visuals" onClick={() => setScene(0)} />
        </div>
        <div className={scene === 1 ? "hidden" : "block"}>
          <Button text="Vergelijk het water" onClick={() => setScene(1)} />
        </div>
        <div className={scene === 2 || scene === 4 ? "hidden" : "block"}>
          <Button text="Test je kennis" onClick={() => setScene(2)} />
        </div>
        <div className={scene === 3 ? "hidden" : "block"}>
          <Button text="Tips" onClick={() => setScene(3)} />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
