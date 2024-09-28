import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css'
const OrderForm = () => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const validateForm = () => {
    let formErrors = {};

    if (!name) formErrors.name = "Name is required.";
    if (!address) formErrors.address = "Address is required.";
    if (!email || !/\S+@\S+\.\S+/.test(email)) formErrors.email = "A valid email is required.";
  

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert(`You have selected ${quantity} items.`);
    }
  };

  return (


    <>


<form className="order-form  ">



      {/* Name */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>



{/* Item Name */}
<div className="mb-3">
  <label htmlFor="itemName" className="form-label">Item Name:</label>
  <select className="form-select" id="itemName">
    <option>Select an item</option>
    <option value="item1">Dark chocolate</option>
    <option value="item2">Pressure cooker refried beans</option>
    <option value="item3">Beetroot, spinach and coconut curry</option>
    <option value="item4">Homemade crispy chilli oil</option>
    <option value="item5">Ultimate vegan lasagne</option>
    <option value="item6">Vegan Victoria sponge cake</option>
    <option value="item7">Vegan quiche</option>
    <option value="item8">Vegan chocolate brownies</option>
    <option value="item9">Vegan blueberry pancakes</option>
    <option value="item10">Vegan sausage casserole</option>
    <option value="item11">Air fryer potato wedges</option>
    <option value="item12">Easy rhubarb cordial</option>
  </select>
</div>

{/* Quantity */}
<div className="mb-3">
  <label htmlFor="quantity" className="form-label">Quantity:</label>
  <input
    type="number"
    className="form-control"
    id="quantity"
    value={quantity}
    onChange={(e) => setQuantity(e.target.value)}
  />
</div>

      {/* Address */}
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address:</label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {errors.address && <div className="text-danger">{errors.address}</div>}
      </div>

      {/* Email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>


      {/* Special Instructions */}
      <div className="mb-3">
        <label htmlFor="instructions" className="form-label">Special Instructions:</label>
        <textarea className="form-control" id="instructions" rows="3"></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Submit Order
      </button>
    
    </form>
  
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

export default OrderForm;


