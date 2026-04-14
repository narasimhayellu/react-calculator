import { useState } from "react";

const Calculator = () => {
    const [input, setInput] = useState("");

    const calculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("error")
        }
    }

    const squareRoot = () => {
        try {
            const result = Math.sqrt(eval(input));
            setInput(result.toString());
        } catch (error) {
            setInput("error");
        }
    }

    const cubeRoot = () => {
        try {
            const result = Math.cbrt(eval(input));
            setInput(result.toString());
        } catch (error) {
            setInput("error");
        }
    }

    const square = () => {
        try {
            const result = Math.pow(eval(input), 2);
            setInput(result.toString());
        } catch (error) {
            setInput("error")
        }

    }

    const cube = () => {
        const result = Math.pow(eval(input), 3);
        setInput(result.toString());
    }
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <div style={{ border: "1px solid black", padding: "20px", borderRadius: "10px", backgroundColor: "#d4b8e8", boxSizing: "border-box", maxWidth: "450px", margin: "0 auto" }}>
                <input type="text" readOnly value={input} style={{ width: "100%", height: "60px",borderRadius:"3px", fontSize: "30px", textAlign: "right", marginBottom: "10px" }} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }}>
                    {["1", "2", "3"].map(btn => <button style={{ backgroundColor: "#ffe7b8", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} key={btn} onClick={() => setInput(input + btn)}>{btn}</button>)}
                    <button style={{ backgroundColor: "#fea816", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} onClick={() => setInput(input + "/")}>/</button>
                    {["4", "5", "6"].map(btn => <button style={{ backgroundColor: "#ffe7b8", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} key={btn} onClick={() => setInput(input + btn)}>{btn}</button>)}
                    <button style={{ backgroundColor: "#fea816", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} onClick={() => setInput(input + "*")}>x</button>
                    {["7", "8", "9"].map(btn => <button style={{ backgroundColor: "#ffe7b8", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} key={btn} onClick={() => setInput(input + btn)}>{btn}</button>)}
                    <button style={{ backgroundColor: "#fea816", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} onClick={() => setInput(input + "-")}>-</button>
                    <button style={{ backgroundColor: "#ffe7b8", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} onClick={squareRoot}>√</button>
                    <button style={{ backgroundColor: "#ffe7b8", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} onClick={() => setInput(input + 0)}>0</button>
                    <button style={{ backgroundColor: "#ffe7b8", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} onClick={cubeRoot}>∛x</button>
                    <button style={{ backgroundColor: "#fea816", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} onClick={() => setInput(input + "+")}>+</button>
                    <button style={{ backgroundColor: "#ffe7b8", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} onClick={square}>x²</button>
                    <button style={{ backgroundColor: "#ffe7b8", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} onClick={cube}>x³</button>
                    <button style={{ backgroundColor: "#ffe7b8", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} onClick={() => setInput("")}>C</button>
                    <button style={{ backgroundColor: "#29a25b", borderRadius: "3px", padding: "15px", fontSize: "22px", cursor: "pointer" }} onClick={calculate}>=</button>
                </div>
            </div>

        </div>
    )
}
export default Calculator;