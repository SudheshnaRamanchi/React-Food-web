import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Data.json'; // Import the JSON data correctly
import './App.css';

const RecipeCards = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setRecipes(data);
    } else {
      console.error("Data is not an array:", data);
    }
  }, []);

  return (

    <>
    <div className="container">
      <div className="row">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div className="col-md-4" key={recipe.id}>
              <Card style={{ width: '18rem', marginBottom: '20px' }}>
                <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>Price: {recipe.price}</Card.Text>
                  <Button variant="primary" as={Link} to="/form">
                    Place Order
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>


       {/* Footer Section */}
       <footer className="footer">
       <div className="footer-content">
         <p>© 2024 Sudheshna Ramanchi.
         Connect with me on<a href="https://www.linkedin.com/in/sudheshna-ramanchi-341363312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="in-icon-.jpg" width={20}></img></a>   <a href="https://github.com/SudheshnaRamanchi"><img src="3291667.png" width={20}></img></a><a href="https://www.instagram.com/sudheshna_rao/?hl=en"><img src="instagram.webp" width={40}></img></a></p>
       
       </div>
     </footer>


     </>
  );
};

export default RecipeCards;

