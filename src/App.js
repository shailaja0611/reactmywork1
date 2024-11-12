
// import './App.css';
// import Apple from './Apple';
// import Sample from './example/Sample';



// function App() {
//   return (
//     <div className="App">
//     <Apple/>
//     <Sample/>
//     <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"/>

  
//     </div>
//   )  
//   } ;
  


// export default App;


// import React from "react";
// function App() {
//   let prod1 = {
//       id: 1,
//       name: "Lenovo ThinkPad",
//       aprice: 120000,
//       bprice: 100000,
//   };

//   return (
//       <Product product={prod1} />
//   );
// }

// function Product({ product }) {
//   return (
//       <div>
//           <h1>product:id1</h1>
//           <h1>{product.name}</h1>
//           <p>Original Price: ₹{product.aprice}</p>
//           <p>Discounted Price: ₹{product.bprice}</p>

//       </div>
//   );
// }

// export default App;
// src/App.js

// import React, { useState } from 'react';
// import './App.css'

    
// function App() {
//   // State to store the list of items
//   const [items, setItems] = useState([]);
//   const [newItem, setNewItem] = useState('');

//   // Function to handle adding a new item
//   const addItem = () => {
//     if (newItem.trim() !== '') {
//       setItems([...items, newItem]);
//       setNewItem(''); // Clear the input field after adding
//     }
//   };

//   return (
//     <div className="App">
//       <h1>React List Example</h1>

//       {/* Input for new item */}
//       <input
//         type="text"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)} // Update newItem state
//         placeholder="Add a new item"
//       />

//       {/* Button to add the item */}
//       <button onClick={addItem}>Add Item</button>

//       {/* Render the list of items */}
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import './App.css'

// function Crud() {
  
//   const [itemData, setItemData] = useState({
//     name: "",
//     employeeId: "",
//     email: "",
//     city: "",
//     description: "",
//   });
//   const [items, setItems] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editItemId, setEditItemId] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setItemData({ ...itemData, [name]: value });
//   };

//   const handleSubmission = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       setItems(
//         items.map((item) =>
//           item.id === editItemId ? { ...item, ...itemData } : item
//         )
//       );
//       setIsEditing(false);
//       setEditItemId(null);
//     } else {
//       setItems([...items, { ...itemData, id: Date.now() }]);
//     }
//     setItemData({ name: "", employeeId: "", email: "", city: "", description: "" });
//   };

//   const editItem = (item) => {
//     setItemData({
//       name: item.name,
//       employeeId: item.employeeId,
//       email: item.email,
//       city: item.city,
//       description: item.description,
//     });
//     setIsEditing(true);
//     setEditItemId(item.id);
//   };

//   const deleteItem = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   return (
//     <div>
//       <h1>CRUD Operations</h1>
//       <form onSubmit={handleSubmission}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={itemData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="employeeId"
//           placeholder="Employee ID"
//           value={itemData.employeeId}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={itemData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           value={itemData.city}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={itemData.description}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">{isEditing ? "Update" : "Add"}</button>
//       </form>

//       <div>
//         <h2>Items</h2>
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>
//               <span>
//                 {item.name} ({item.employeeId}) - {item.email} - {item.city} :{" "}
//                 {item.description}
//               </span>
//               <button onClick={() => editItem(item)}>Edit</button>
//               <button onClick={() => deleteItem(item.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Crud;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => <div><h2>Home Page</h2></div>;
const About = () => <div><h2>About Page</h2></div>;
const Services = () => <div><h2>Services Page</h2></div>;
const Contact = () => <div><h2>Contact Page</h2></div>;
const User = () => <div><h2>User Profile</h2></div>;

const FetchCategory = () => {
  const [categories, setCategories] = useState([]);
  const [filterData, setFilterData] = useState([]);

  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  
  const handleFilterCategory = async (category) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      setFilterData(data); 
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

  return (
    <div>
      <h1>Fetching Categories and Products</h1>
      
      {/* Category Buttons */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginBottom: '20px' }}>
        {categories.map((category) => (
          <button key={category} onClick={() => handleFilterCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Filtered Products */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 400px)',
        gap: '20px',
      }}>
        {filterData.length === 0 ? (
          <p>No products available for this category</p>
        ) : (
          filterData.map((product) => (
            <Link to="/productdetails" state={{ id: product.id }} key={product.id}>
              <div style={{
                border: '1px solid #ddd',
                padding: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
              }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Category:</strong> {product.category}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            {isLoggedIn && <li><Link to="/user">User Profile</Link></li>}
          </ul>
        </nav>

        <button onClick={toggleLogin}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<FetchCategory />} />
          <Route path="/user" element={isLoggedIn ? <User /> : <Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
