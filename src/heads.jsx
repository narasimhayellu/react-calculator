import { useRef, useState } from "react";

const Heads = ()=>{
    const [user,setUser] = useState(null);
    const [p1Score,setP1Score] = useState(0);
    const [p2Score,setP2Score] = useState(0);
    const [round,setRound] = useState(1);
    const [flip,setFlip] = useState(false);
    const [message,setMessage] = useState("");

    const activeUser = round % 2 !== 0 ? 1 : 2

    const flipCoin = ()=>{
        if (round > 20 || message) return;
        setFlip(true);

        setTimeout(()=>{
            const coinResult = Math.random() < 0.5 ? "heads" : "tails";
            let currentP1 = p1Score;
            let currentP2 = p2Score;

            if (user === coinResult){
                activeUser === 1 ? currentP1++ : currentP2++
            } else {
                activeUser === 1 ? currentP2++ : currentP1++
            }
       
            setP1Score(currentP1);
            setP2Score(currentP2);
            setFlip(false);
            setUser(null);
            
            if (round < 20) {
                setRound(prev => prev + 1);
            } else {
                switch (true) {
                    case (currentP1 > currentP2):
                        setMessage("Player 1 wins!")
                        break;
                    case (currentP2 > currentP1):
                        setMessage("Player 2 wins!")
                        break;
                    default:
                        setMessage("Its a draw!")
                }
            }
        },500)
    }

    const resetGame = ()=>{
        setUser(null);
        setP1Score(0);
        setP2Score(0);
        setRound(1);
        setMessage("");
    }

    return( 
    <div style={{textAlign:"center"}}>
        <h1>Round: {round}/20</h1>
        {!message ? (
            <>
            <h2 style={{ color: activeUser === 1 ? 'blue' : 'red' }}>
            Player {activeUser}'s Turn to Choose
          </h2>
          <div style={{ margin: '20px',display: 'flex', gap: '5px', justifyContent:"center" }}>
            <button style={{height:"50px", width:"70px"}} onClick={() => setUser('heads')} disabled={flip}>Heads</button>
            <button style={{height:"50px", width:"70px"}} onClick={() => setUser('tails')} disabled={flip}>Tails</button>
          </div>
          {user && (
            <div>
              <p>Player {activeUser} has chosen {user}.</p>
              <button style={{height:"30px", width:"70px"}} onClick={flipCoin} disabled={flip}>
                {flip ? "Flipping..." : "Flip Coin"}
              </button>
            </div>
          )}
            </>
        ):(
            <div>
            <h1>{message}</h1>
            <button onClick={resetGame}>Restart Game</button>
          </div>
        )}
         <div style={{ marginTop: '30px', borderTop: '1px solid #ccc' }}>
        <h3>Total Scores: </h3>
        <p>Player 1: {p1Score} | Player 2: {p2Score}</p>
      </div>
    </div>)
}
export default Heads;
