import { useState } from "react";

const ToDo = () => {
    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");
    const [edit, setEdit] = useState(null);

    const addTask = (e) => {
        e.preventDefault();
        if (!input.trim()) return; 
        const newToDo = { id: Date.now(), text: input, done: false };
        setTask([...task, newToDo]);
        setInput("");
    }

    const strikeTask = (id) => {
        setTask(task.map(t => t.id === id ? { ...t, done: !t.done } : t))
    }

    const editTask = (id, newText) => {
        setTask(task.map(t => t.id === id ? { ...t, text: newText } : t))
    }

    const delTask = (id) => {
        setTask(task.filter(t => t.id !== id));
    }
    return (
        <div style={{ textAlign: "center", margin: "40px", }}>
            <h1>To-Do List</h1>
            <div style={{ display: "flex", gap: "3px", justifyContent: "center" }}>
                <input style={{ height: "40px", width: "400px", fontSize: "20px" }} maxLength={50} type="text" onChange={(e) => setInput(e.target.value)} value={input} />
                <button style={{ backgroundColor: "yellowgreen", height: "40px", width: "100px", margin: "3px", fontSize: "20px" }} onClick={addTask}>Add</button>
            </div>


            <div style={{ borderTop: '2px solid black', margin: "20px" }}>
                {task.map(task => {
                    return (
                        <div key={task.id} style={{ margin: "20px", display: "grid", 
                            gridTemplateColumns: "50px 1fr 80px 60px",alignItems: "center", gap: "10px",
                            maxWidth: "1050px" }}>
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => strikeTask(task.id)}
                                style={{ height: "20px", width: "20px",margin:"5px" }}
                            />
                            {edit === task.id ? (
                                <input onChange={(e) => editTask(task.id, e.target.value)} onBlur={() => setEdit(null)} autoFocus
                                maxLength={50}  style={{ height: "20px", width: "200px", fontSize: "20px" }} />
                            ) : (
                                <span onClick={() => strikeTask(task.id)}
                                    style={{ textDecoration: task.done ? "line-through" : "none", cursor: "pointer",textAlign: "left", fontSize: "30px" }}>
                                    {task.text}
                                </span>
                            )}
                            <button style={{ backgroundColor: "black", color: "white",height: "40px", width: "50px", fontSize: "20px", borderRadius: "5px", marginLeft: "5px" }} 
                            onClick={() => setEdit(task.id)}>Edit</button>
                            <button style={{ backgroundColor: "red", color: "white", borderRadius: "5px", marginLeft: "5px", height: "40px", width: "50px", fontSize: "20px" }} 
                            onClick={() => delTask(task.id)}>X</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ToDo;
