import { useEffect, useState } from "react";

const Notes = () => {
    const [input, setInput] = useState({ title: "", content: "" })
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem("notes")
        return saved ? JSON.parse(saved) : []
    })
    const [edit, setEdit] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput(prev => ({ ...prev, [name]: value }))
    }

    const addNotes = (e) => {
        e.preventDefault();
        if (!input.title.trim() && !input.content.trim()) return;
        const newNote = { id: Date.now(), title: input.title, content: input.content }
        setNotes([...notes, newNote])
        setInput({ title: "", content: "" });
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])

    const editNotes = (id, field, newValue) => {
        setNotes(notes.map(t => t.id === id ? { ...t, [field]: newValue } : t))
    }
    const delNotes = (id) => {
        setNotes(notes.filter(t => t.id !== id))
    }
    return (
        <div style={{ textAlign: "center", margin: "40px", }}>
            <h1>Notes</h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <input
                    name="title"
                    placeholder="Title"
                    style={{ width: "65vw", marginBottom: "10px", padding: "10px" }}
                    onChange={handleChange}
                    value={input.title}
                />
                <textarea
                    name="content"
                    placeholder="Note content..."
                    style={{ width: "65vw", height: "150px", padding: "10px" }}
                    onChange={handleChange}
                    value={input.content}
                />
                <button style={{ backgroundColor: "yellowgreen", borderRadius: "50px", height: "40px", width: "100px", margin: "3px", fontSize: "20px" }}
                    onClick={addNotes}>Add</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {notes.map(note => {
                    return (
                        <div key={note.id} style={{ listStyle: "none", display: "flex", justifyContent: "center" }}>
                            <div style={{
                                backgroundColor: "white",
                                border: "1px solid black",
                                margin: "10px",
                                padding: "15px",
                                width: "65vw",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                borderRadius: "8px"
                            }}>
                                {edit === note.id ? (
                                    <>
                                        <div style={{ width: "100%" }}>
                                            <input
                                                value={note.title}
                                                onChange={(e) => editNotes(note.id, 'title', e.target.value)}
                                                style={{
                                                    width: "98%",
                                                    fontSize: "22px",
                                                    fontWeight: "bold",
                                                    marginBottom: "10px",
                                                    padding: "5px"
                                                }}
                                            />
                                            <textarea
                                                value={note.content}
                                                onChange={(e) => editNotes(note.id, 'content', e.target.value)}
                                                style={{
                                                    width: "98%",
                                                    height: "150px",
                                                    fontSize: "18px",
                                                    padding: "10px",
                                                    borderRadius: "5px",
                                                    fontFamily: "Arial"
                                                }}
                                                autoFocus
                                            />
                                            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                                                <button
                                                    onClick={() => setEdit(null)}
                                                    style={{ backgroundColor: "pink", color: "black", padding: "5px 20px", borderRadius: "5px", cursor: "pointer", height: "40px" }}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h2 style={{ margin: "0 0 10px 0" }}>{note.title}</h2>
                                        <div style={{ fontSize: "18px", textAlign: "left", whiteSpace: "pre-wrap" }}>
                                            {note.content}
                                        </div>
                                    </>
                                )}
                                <div style={{ display: "flex", justifyContent: "center", gap: "15px", width: "100%", marginTop: "5px" }}>
                                    <button
                                        style={{
                                            backgroundColor: "yellow",
                                            color: "black",
                                            padding: "8px 20px",
                                            fontSize: "15px",
                                            borderRadius: "50px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => setEdit(note.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor: "red",
                                            color: "black",
                                            padding: "8px 20px",
                                            fontSize: "16px",
                                            borderRadius: "50px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => delNotes(note.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Notes;