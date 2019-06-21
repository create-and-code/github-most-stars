import React from "react";
import "./App.css";
import RepoTable from "./components/repoTable";

// I want to see all javascript repos with over 25k stars, sorted by most to least order
// I want to see the name, number of stars, and a link to the repo
// I want to know when the screen is loading
// I want to know when I have an error

function App() {
  return <RepoTable />;
}

export default App;
