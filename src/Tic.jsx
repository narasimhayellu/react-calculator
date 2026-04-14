import { useState } from "react";

const Tictac = ()=>{
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(true);

    const onCalculate = (squares)=>{
        const lines = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ]
        for (let [a,b,c] of lines ) {
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
            
        }
        return null;
    }

    const onHandleClick = (i)=>{
        const winner = onCalculate(board);
        if (board[i] || winner) return;

        const newBoard = [...board];
        newBoard[i] = turn ? "X" : "O"

        setBoard(newBoard);
        setTurn(!turn);
    }

    const winner = onCalculate(board);
    const draw = !winner && board.every(squares=>squares !== null)
    const status = winner ? `Winner: ${winner}` : draw ? "Its a draw" : `Next:${turn ? "X" :"O"}`

    return(
    <div style={{ textAlign: 'center' }}>
        <h1>{status}</h1>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,120px)", justifyContent:"center"}}>
            {board.map((val,i)=>{
                return(
                    <button style={{height:"120px",width:"120px",backgroundColor:"#fff",border:"2px solid black",fontSize:"30px",color: val === "X" ? "#3498db" : "#e74c3c"}} 
                    onClick={()=>onHandleClick(i)} key={i}>{val}</button>
                )
            })}
        </div>
        <button style={{marginTop:"20px"}} onClick={()=>setBoard(Array(9).fill(null))}>Restart</button>
    </div>)
}

export default Tictac;
