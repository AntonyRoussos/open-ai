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
      <div className="pageTitle">
        <h2>User</h2>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ margin: 5 }}>
              <img
                style={{
                  width: 200,
                  height: 200,
                  background: "#f92344",
                  borderRadius: 100,
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
              <div>
                <b>{user.name}</b>
              </div>
              <div>Company: {user.company?.name}</div>
              <div>Email: {user.email}</div>
              <div
                className="site"
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
