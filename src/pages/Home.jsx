import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="iFindTaxPro-navigation">
      <h1>Homepage</h1>
      
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
