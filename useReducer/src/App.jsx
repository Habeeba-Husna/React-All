import { useState } from 'react'
import './App.css'
import { useReducer } from 'react'


// const initialState=0;      //state
// const reducer=(state,action)=>{
//   switch(action){
//     case 'add':
//       return (state=state+1)
//     case 'remove':
//         return (state=state-1) 
//     case 'reset':
//           return initialState 
//       default:
//         return state
//   }

// }
// function App() {
//   const [state,dispatch] = useReducer(reducer,initialState)

//   return (
//     <div className='App'>
//       <h3>{state}</h3>
//       <button onClick={()=>{dispatch('add')}}>add</button>
//       <button onClick={()=>{dispatch('remove')}}>remove</button>
//       <button onClick={()=>{dispatch('reset')}}>reset</button>

//     </div>
   
//   )
// }


// const initialState={       //object
//   cart:0    
// };      
// const reducer=(state,action)=>{
//   switch(action){
//     case 'add':
//       return {cart:state.cart+1}
//     case 'remove':
//         return {cart:state.cart-1}
//     case 'reset':
//           return initialState 
//       default:
//         return state
//   }

// }

// function App() {
//   const [state,dispatch] = useReducer(reducer,initialState)

//   return (
//     <div className='App'>
//       <h3>{state.cart}</h3>
//       <button onClick={()=>{dispatch('add')}}>add</button>
//       <button onClick={()=>{dispatch('remove')}}>remove</button>
//       <button onClick={()=>{dispatch('reset')}}>reset</button>

//     </div>
   
//   )
// }



// const initialState={       //object
//   cart:0    
// };      
// const reducer=(state,action)=>{
//   switch(action.type){
//     case 'add':
//       return {cart:state.cart+1}
//     case 'remove':
//         return {cart:state.cart-1}
//     case 'reset':
//           return initialState 
//       default:
//         return state
//   }

// }

// function App() {
//   const [state,dispatch] = useReducer(reducer,initialState)

//   return (
//     <div className='App'>
//       <h3>{state.cart}</h3>     //dispatch method can recieve more than one values(pass 2 parameteters ) 1.type 2.payload
//       <button onClick={()=>{dispatch({type:'add'})}}>add</button>
//       <button onClick={()=>{dispatch({type:'remove'})}}>remove</button>
//       <button onClick={()=>{dispatch({type:'reset'})}}>reset</button>

//     </div>
   
//   )
// }





const initialState={       //object
  cart:0    
};      
const reducer=(state,action)=>{
  switch(action.type){
    case 'add':
      return {...state,cart:state.cart+action.payload}
    case 'remove':
        return {...state,cart:state.cart-action.payload}
    case 'reset':
          return initialState 
      default:
        return state
  }

}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div className='App'>
      <h3>{state.cart}</h3>    
      <button onClick={()=>{dispatch({type:'add',payload:4})}}>add</button>
      <button onClick={()=>{dispatch({type:'remove',payload:2})}}>remove</button>
      <button onClick={()=>{dispatch({type:'reset',payload:0})}}>reset</button>

    </div>
   
  )
}
export default App
