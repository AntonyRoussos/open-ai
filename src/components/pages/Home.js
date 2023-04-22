import React, { useEffect, useState } from "react";
import UserCard from "../common/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div>Home Page</div>
      <input type="text" onChange={handleSearchChange} />
      <ul className="list">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

export default Home;
