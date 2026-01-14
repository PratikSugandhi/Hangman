import { Link, useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../Components/TextInputForm/TextInputFormContainer";
function StartGame()
{
    const navigate=useNavigate();
    function handleSubmit(value) {
        navigate('/play', { state: {wordSelected: value}});
    }
    return(
        <>
            <h1>StartGame Page</h1>
            <br />
            <Link to='/play'>Play Game</Link>
            <Link to='/App'>Go to App</Link>
            <TextInputFormContainer onSubmit={handleSubmit} />
        </>
    )
}
export default StartGame;