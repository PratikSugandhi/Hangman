import { Link } from "react-router-dom";
function PlayGame()
{
    return(
        <>
            <h1>PlayGame Page</h1>
            <br />
            <Link to='/start'> Start Game </Link>
            <br />
            <Link to='/App'>Go to App</Link>
        </>
    )
}
export default PlayGame;