import React, { useState, useEffect } from "react";

const User = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const responeJson = await response.json();
      setUser(responeJson);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <>
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
                src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
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
              <a href={user.website}>{user.website}</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default User;