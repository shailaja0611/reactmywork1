
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


import { useState } from "react";
import './App.css'

function Crud() {
  
  const [itemData, setItemData] = useState({
    name: "",
    employeeId: "",
    email: "",
    city: "",
    description: "",
  });
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    if (isEditing) {
      setItems(
        items.map((item) =>
          item.id === editItemId ? { ...item, ...itemData } : item
        )
      );
      setIsEditing(false);
      setEditItemId(null);
    } else {
      setItems([...items, { ...itemData, id: Date.now() }]);
    }
    setItemData({ name: "", employeeId: "", email: "", city: "", description: "" });
  };

  const editItem = (item) => {
    setItemData({
      name: item.name,
      employeeId: item.employeeId,
      email: item.email,
      city: item.city,
      description: item.description,
    });
    setIsEditing(true);
    setEditItemId(item.id);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={itemData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={itemData.employeeId}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={itemData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={itemData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={itemData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEditing ? "Update" : "Add"}</button>
      </form>

      <div>
        <h2>Items</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>
                {item.name} ({item.employeeId}) - {item.email} - {item.city} :{" "}
                {item.description}
              </span>
              <button onClick={() => editItem(item)}>Edit</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Crud;
