import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import useUser from "../../hooks/UseUser";
import React from "react";

function App() {
  const { refreshAuth } = useUser();

  React.useEffect(() => {
    refreshAuth();
  });
  return <div className="App"></div>;
}

export default App;
