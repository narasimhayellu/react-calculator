import { useState } from "react";
import { DiVim } from "react-icons/di"

const Quiz = () => {
    const questions = [
        { text: "What's the capital of India", options: ["Delhi", "Mumbai", "Goa"], answer: "Delhi" },
        { text: "What's 5 * 20", options: ["125", "100", "150"], answer: "100" },
        { text: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter"], answer: "Mars" }]

    const [result, setResult] = useState(false);
    const [id, setId] = useState(0);
    const [score, setScore] = useState(0);

    const handle = (selected) => {
        if (selected === questions[id].answer) {
            setScore(score + 1)
        }

        const nextId = id + 1
        if (nextId < questions.length) {
            setId(nextId)
        } else {
            setResult(true);
        }
    }
    return (
        <div style={{ textAlign: "center", margin: "5px" }}>
            <h1 style={{ color: "white",margin:"15px", marginTop:"25px" }}>Quiz App</h1>
            <div style={{
        backgroundColor: "#f0f8ff", 
        border: "2px solid #007bff",
        borderRadius: "15px",
        padding: "30px",
        maxWidth: "500px",
        margin: "0 auto",
        fontSize: "24px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}>
        {result ? (
          <div>
            <h2 style={{ fontSize: "32px" }}>Quiz Completed!</h2>
            <p>Your Score: <b>{score}</b> out of {questions.length}</p>
            <button 
                onClick={() => window.location.reload()} 
                style={{ padding: "10px 20px", fontSize: "20px", cursor: "pointer",backgroundColor:"red",color:"white", borderRadius:"5px" }}
            >
                Restart
            </button>
          </div>
        ) : (
          <div>
            <h3 style={{ fontSize: "20px", color: "#555" }}>
                Question {id + 1}/{questions.length}
            </h3>
            <p style={{ fontWeight: "bold", marginBottom: "20px" }}>
                {questions[id].text}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
              {questions[id].options.map(opt => (
                <button 
                  key={opt} 
                  onClick={() => handle(opt)} 
                  style={{ 
                    width: "100%", 
                    padding: "15px", 
                    fontSize: "20px", 
                    cursor: "pointer",
                    borderRadius: "8px",
                    border: "1px solid #007bff",
                    backgroundColor: "white",
                    transition: "0.2s"
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "#e7f3ff"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "white"}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
        </div>
    )
}
export default Quiz;