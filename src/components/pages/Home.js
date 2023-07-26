import React, { useEffect, useState } from "react";
import UserCard from "../common/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../../redux/action";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const usersRedux = useSelector((state) => state.reducer.users);
  console.log("user in local state");
  console.log(users);
  console.log("user in reducer");
  console.log(usersRedux);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch(storeData({ data }));
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
