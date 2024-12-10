import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './BlogContext';
import CreateBlog from './pages/CreateBlog';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import BlogContext from './context/BlogContext';


function App() {
  return (

    <BlogProvider>

      <Router>
        <Routes>

          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </Router>
      
    </BlogProvider>
  );
}

export default App;
