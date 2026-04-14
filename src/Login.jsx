import axios from "axios";
import { useState } from "react";

const Login = ()=>{
    const [formData,setFormData] = useState({
        name:"",
        password:""
    });

    useEffect(()=>{
        const user = async() =>{
            try {
                const response = await axios.post("",formData);
                console.log(response.data);
            } catch (error) {
                console.log("error:",error.message)
            }
        }
        user() 
    },[])

    const onHandleChange = (e)=>{
        const {name,value} = e.target
        setFormData(prev=>({...prev,[name]:value}))
    }
  
    return(
        <div>
            <form>
            <input type="text" placeholder="enter name" onChange={onHandleChange} name="name" value={formData.name}/>
            <input type="password" placeholder="enter password" onChange={onHandleChange} name="password" value={formData.password} />
            <button>submit</button>
            </form>
        </div>
    )
}
export default Login;