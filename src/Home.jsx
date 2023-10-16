// Home.js
import React from "react";
import { useParams } from 'react-router-dom';

function Home() {
  const { username } = useParams();
  return (
    <>
      <div style={{ marginTop: "50px" }}>Home Page welcomes {username}</div>
    </>
  );
}

export default Home;
