// import { useState } from 'react'
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Content from './Component/Content'
// import First from './Component/First'
// import Form from './Component/Form'
// import Context from './Component/Context'
// import './App.css'

// function App() {
 
//   return (
    
//     <Router>
//       <Context>
//       <Routes>
//        <Route path='/form' element={<Form/>}></Route>
//        <Route path='/' element={<First/>}></Route>
//        <Route path='/content/:id' element={<Content/>}></Route>

//       </Routes>
//       </Context>
//     </Router>
   
    
//     )
// }

// export default App




import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import BlogProvider from './Pages/BlogContext';
import Create from './Pages/Create';
import Blog from './Pages/Blog';
import Details from './Pages/Details';
function App() {
 
  return (
    <>
     <BlogProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Create/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Details/:id' element={<Details/>}/>
        </Routes>
      </Router>
     </BlogProvider>
    </>
  )
}

export default App



// import React from 'react'
// import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import Component1 from './Page/Component1'
// import Component2 from './Page/Component2'
// import Component3 from './Page/Component3'
// import ComponentProvider from './Page/Context'


// const App = () => {
//   return (
//     <ComponentProvider>
//       <BrowserRouter>
//      <Routes>
//      <Route path='/' element={<Component1/>}/>
//      <Route path='/comp' element={<Component2/>}/>
//      <Route path='/compo' element={<Component3/>}/>
//      </Routes>
//       </BrowserRouter>
       
        
     
//       </ComponentProvider>
//   )
// }

// export default App

