import React from 'react';

const User = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "A passionate developer with a love for coding and technology.",
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
};

export default User;
