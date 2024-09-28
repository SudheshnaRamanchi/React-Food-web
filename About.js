import React from "react";
import './Abou.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.css';

const Homes = () => {
  return (
    <>
      <div className="container">
        <div className="tow">
          <div className="text">
            <h1>About us</h1>
            <p>
              <span style={{ color: '#2a0505' }}>
                From cafes to fine dining establishments,
                 As a leading Indian food solutions provider, we offer a comprehensive range of food products 
                to cater to all your restaurant or commercial kitchen needs From flavorful crushes, seasonings, and marinades
                 to ready-to-use sauces, chutneys, and condiments, we have everything you need
                  to create delicious dishes. Understand the importance of variety,
              </span>
            </p>
          </div>
        </div>

        <div className="home-img">
          <img src="./Delicious+food.png" alt="profile" />
        </div>
      </div>
      <br />

      <div className="container">
        <div className="row">
          <h1>Our menu</h1>

          {[
            { id: 1, title: "Chocolate Bark", image: "https://apipics.s3.amazonaws.com/vegan_api/1.jpg" },
            { id: 2, title: "Strawberry Collins", image: "https://apipics.s3.amazonaws.com/vegan_api/35.jpg" },
            { id: 3, title: "Jodhpuri Mirchi", image: "https://apipics.s3.amazonaws.com/vegan_api/63.jpg" },
            { id: 4, title: "Mushroom Burger", image: "https://apipics.s3.amazonaws.com/vegan_api/100.jpg" }
          ].map((menuItem) => (
            <div className="col-md-3" key={menuItem.id}>
              <Card style={{ width: '15rem', marginBottom: '20px', borderRadius: '500px', position: 'relative' }}>
                <Card.Img
                  src={menuItem.image}
                  style={{ borderRadius: '50%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  color: 'white'
                }}>
                  <Card.Title>{menuItem.title}</Card.Title>
                  <Button as={Link} to="/recipecard" variant="primary" style={{ borderRadius: '50%', marginTop: '10px' }}>
                    See menu
                  </Button>
                </div>
              </Card>
            </div>
          ))}
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
}

export default Homes;

