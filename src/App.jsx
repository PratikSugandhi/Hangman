import TextInputFormContainer from "./Components/TextInputForm/TextInputFormContainer.jsx";
function App()
{
  return(
    <>
        <h1>Let's Goo.....</h1>
        
      <TextInputFormContainer onSubmit={(value) => console.log("Value coming from the hidden form is", value)} />        

    </>
  );
}
export default App;
