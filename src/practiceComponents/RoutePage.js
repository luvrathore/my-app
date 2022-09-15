import React from "react";
import {
  BrowseRouter as Router,
  Routes,
  Link,
  Switch,
  Route
} from "react-router-dom";
import VideoPage from "./VideoPage";

function RoutePage() {
  return (
    <>
      <h1>Hello RoutePage </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/about" component={VideoPage} />
      </Routes>
    </>
  );
}

export default RoutePage;
