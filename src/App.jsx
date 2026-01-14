import TextInputFormContainer from "./Components/TextInputForm/TextInputFormContainer.jsx";
import PlayGame from "./Pages/PlayGame/PlayGame.jsx";
import StartGame from "./Pages/StartGame/StartGame.jsx";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App()
{
  return(
    <>
       <h1 className="text-blue-600">Let's Goo.....</h1>
       

        
      <TextInputFormContainer onSubmit={(value) => console.log("Value coming from the hidden form is", value)} />        

      <Routes>
          <Route path="/play" element={<PlayGame />} />
          <Route path="/start" element={<StartGame />} />
          <Route path="*" element={<div> not found </div>} />
      </Routes>
    <br />
        <Link to='/play'>Play Game</Link>
        <br />
    <Link to='/start'>Start Game</Link>
    </>
  );
}
export default App;
