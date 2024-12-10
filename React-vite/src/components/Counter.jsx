
// import { useReducer } from "react";

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     // case "decrement":
//     //   return state - 1;

//     case "decrement":
//       return state > 0 ? state - 1 : state;  // Prevent going below zero


//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function Counter() {
//   const [number, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h2>Counter: {number}</h2>
//       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// }

// export default Counter;





//when clicks show the increment only not decrement using use state
import { useState } from 'react';

 function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      click me {count} times
    </button>
  );
}
export default Counter;