import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const responeJson = await response.json();
      setUser(responeJson);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <>
      <div>User Page</div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ margin: 5 }}>
              <img
                style={{
                  width: 200,
                  height: 200,
                  background: "#f92344",
                  borderRadius: 16,
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU"
                alt="user"
              />
            </div>
            <div
              style={{
                margin: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div>@{user.username}</div>

              <div>NAME: {user.name}</div>
              <div>COMPANY: {user.company?.name}</div>
              <div>EMAIL: {user.email}</div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.location.href = `https://www.${user.website}`;
                }}
              >
                {user.website}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default User;
