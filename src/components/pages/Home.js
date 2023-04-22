import React, { useEffect, useState } from "react";
import UserCard from "../common/UserCard";

const Home = () => {

  const [users, setUsers] = useState([]);

   useEffect(()=>{
    getUsers(); 
   },[]);

   const getUsers = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data);
   }

  return (
    <>
    <div>Home Page</div>
      <ul className="list"> 
        {users.map(user => 
          <UserCard key={user.id} user={user}/>
        )}
      </ul>
    </>
  );
};

export default Home;
