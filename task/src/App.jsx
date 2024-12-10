import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import BlogProvider from './Context/BlogContext'
import Create from './Components/Create';
import Blog from './Components/Blog'
import Details from './Components/Details'
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

