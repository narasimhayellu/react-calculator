import { useState } from "react";

const Toggle = ()=>{
    const [on, setOn] = useState(false);

    const handle = ()=>{
        setOn(prev=>!prev)
    }
    return(
        <div style={{backgroundColor: on ? "white" : "black", height:"100vh", width:"100vw",
        textAlign: "center", display: "flex",justifyContent: "center",alignItems: "center",}}>
            <button onClick={handle}>{ on ? "On" : "Off"}</button>
        </div>
    )
}

export default Toggle;


const Tic = ()=>{
    const [user,setUser] = useState(Array(9).fill(null));
    const [turn,setTurn] = useState(true);

    const handle = (squares)=>{
        const lines = [
            []
        ]

        for (let [a,b,c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }




    }
}