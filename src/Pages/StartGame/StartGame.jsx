import { Link } from "react-router-dom";
function StartGame()
{
    return(
        <>
            <h1>StartGame Page</h1>
            <br />
            <Link to='/play'>Play Game</Link>
            <Link to='/App'>Go to App</Link>
        </>
    )
}
export default StartGame;