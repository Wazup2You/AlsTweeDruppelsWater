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
        <h3 className="w-200 h-20 text-center">{scene === 0 ? "Hoe bewust ben jij?" : scene === 1 ? "Welk water is goedkoper?" : scene === 2 ? "Tips om beter gebruik te maken van water" : scene === 3 ? "Klik en sleep de druppels voor meer informatie" : scene === 4 || scene === 5 ? "Met kraanwater ben je per liter meer dan 500 keer goedkoper uit!" : ""}
        </h3>

       

        {/*navigatie*/}
        
        <div className= {scene === 0 || scene === 1 || scene === 2 || scene === 3 ? "flex justify-between items-center" : scene === 4 || scene === 5 ? "flex justify-between items-center w-10/12" : "" }>
          <h1 className={scene === 4 || scene === 5 ? " p-5 w-200 ml-2 h-20 md:text-green-500 "  : "hidden"}> €0,00117</h1> 
           <h1 className={scene === 4 || scene === 5 ? " p-5 mr-20 w-200 h-20 md:text-red-500 order-3 "  : "hidden"}>€0,70</h1>
          
          <div className="order-2">
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
        </div>
 
        
        {/*quiz*/}

        <div className="w-10/12 flex justify-between">
          <div className={scene === 0 ? " p-10 inline" : "hidden"} >
            <h3>Oasen kraanwater</h3>
          </div>
          <div className={scene === 0 ? " p-10 inline" : "hidden"} >
            <h3>Voorverpakt water</h3>
          </div>
        </div>


        <div className="w-10/12 flex justify-between">
          <div className={scene === 1 || scene === 4 || scene === 5 ? "block" : "hidden"} >
            <Button text="Oasen Drinkwater" onClick={() => setScene(4)} scene={scene} />
          </div>   
          <div className={scene === 4 || scene === 5 ? "block w-1/3" : "hidden"}>
          <p className= "p-10 text-center"> Wij zijn van mening dat water betaalbaar moet zijn voor iedereen en maken hier werk van. </p>  
          </div>
          <div className={scene === 1 || scene === 4 || scene === 5 ? "block" : "hidden"} >
            < Button text="Store Drinkwater" onClick={() => setScene(5)} scene={scene} />
          </div>          
        </div>

        <div className="w-10/12 flex justify-between">
          <div className={scene === 2 ? "inline w-1/4 text-center" : "hidden"} >
            <p>Kraanwater kan schaars zijn in de zomermaanden. Wees er deze maanden extra zuinig mee.</p>
          </div>
          <div className={scene === 2 ? "inline w-1/4 text-center" : "hidden"} >
            <p>Door minder lang of vaak te douchen en je tuin schoon te spuiten, help je water tekorten te voorkomen. </p>
          </div>
        </div>

      </div>
    </div >
  );
}

export default App;