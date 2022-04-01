import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Component";

function App() {
  const [scene, setScene] = useState(0);

  return (
    <div>
      {/*titels*/}
      <div className=" w-screen h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="w-200 h-20 text-center">{"Als twee druppels water"}
        </h1>
        <h3 className="w-200 h-20 text-center">{scene === 0 ? "Hoe bewust ben jij?" : scene === 1 || scene === 4 || scene === 5 ? "Welk water is goedkoper?" : scene === 2 ? "Tips om beter gebruik te maken van water" : scene === 3 ? "Klik en sleep de druppels voor meer informatie" : ""}
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
 
        <div className= {scene === 4 || scene === 5 ? " p-10 block w-10/12 flex justify-between"  : "hidden"}>
            <h1 className="w-200 h-20 text-center flex md:text-green-500" > €0,00117</h1> 
            <h1 className="w-200 h-20 text-left flex md:text-red-500">€0,70</h1>
        </div>
        
        {/*quiz*/}

        {/* <div>
            <img src={require('./img/417864.png')}></img>
            <img src={require('./img/417864.png')}></img>
          </div> */}

       


        <div className="w-10/12 flex justify-between">
          <div className={scene === 1 || scene === 4 || scene === 5 ? "block" : "hidden"} >
            <Button text="oasen Drinkwater" onClick={() => setScene(4)} scene={scene} />
          </div>   
          <div className={scene === 4 || scene === 5 ? "block w-2/3" : "hidden"}>
          <p className= "p-10 text-center"> Wij zijn van mening dat water betaalbaar moet zijn voor iedereen en maken hier werk van </p>  
          </div>
          <div className={scene === 1 || scene === 4 || scene === 5 ? "block" : "hidden"} >
            < Button text="Store Drinkwater" onClick={() => setScene(5)} scene={scene} />
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