import React from "react";
import { useNavigate } from "react-router";

const UserCard = ({user}) => {

  const navigate = useNavigate();
  const userHandler = (e, id) =>{
     console.log(e.target, id)
     navigate(`users/${id}`)
  }
  return (
        <li className="list-item"  onClick={(e)=>userHandler(e,user.id)}>
            {user.name} : {user.company.name}
        </li>
  )
};

export default UserCard;
