import { useState } from "react";

const App = () => {
    const [data, setData] = useState({
        userName: "",
        userEmail: ""
    });

    const [list, setList] = useState([]);

    const onHandleChange = (e) => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        setList(prev => [...prev, data])
        setData({ userName: "", userEmail: "" })
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px", justifyContent: "center" }}>
            <form style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }} onSubmit={onHandleSubmit}>
                <input onChange={onHandleChange} type="text" placeholder="Enter your name" name="userName" value={data.userName} />
                <input onChange={onHandleChange} type="email" placeholder="Enter your email" name="userEmail" value={data.userEmail} />
                <button>Submit</button>
            </form>
            <div>
                <div>
                    <table border="5" >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.userName}</td>
                                        <td>{item.userEmail}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default App;

