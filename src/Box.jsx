// tracks render counts
// import { useEffect, useRef, useState } from "react";

import axios from "axios";
import { useEffect, useState } from "react";

// import { useRef } from "react";


// const Box = ()=>{

// const [inputValue,setInputValue]= useState("");
// const count = useRef(0)

// useEffect(()=>
// count.current = count.current + 1)
//     return(
//         <div>
//             <p>type</p>
//             <input type="text" onChange={e=>setInputValue(e.target.value)} />
//             <h1>{count.current}</h1>
//         </div>
//     )
// }
//  export default Box;

// const Box = ()=>{
// const inputElement = useRef();

// const focus = ()=>{
//     inputElement.current.focus()
// }
// return(
//     <div>
//         <input type="text" ref={inputElement}/>
//         <button onClick={focus}>click</button>
//     </div>
// )
// }
// export default Box;

// // 1. The Reducer: A pure function that decides how state changes
// const reducer = (state, action) => {
//     switch (action.type) {
//       case 'increment':
//         return { count: state.count + 1 };
//       case 'decrement':
//         return { count: state.count - 1 };
//       case 'reset':
//         return { count: 0 };
//       default:
//         return state;
//     }
//   };
  
//   function Counter() {
//     // 2. Initialize: returns current state and a 'dispatch' function
//     const [state, dispatch] = useReducer(reducer, { count: 0 });
  
//     return (
//       <div>
//         <p>Count: {state.count}</p>
//         {/* 3. Dispatch: sends an 'action' object to the reducer */}
//         <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//         <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//         <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//       </div>
//     );
//   }