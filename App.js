import React, { useState } from 'react';
import RecipeCards from './Component/RecipeCards';
import Form from './Component/Form';
import About from './Component/About'; // Removed the extra space
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
    
      <Router>
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div>
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/recipecard" element={<RecipeCards />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;


