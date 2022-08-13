import React from "react";
import "./App.css";
import { action, orginals } from "./urls";
import { Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import RowPost from "./Components/RowPost/RowPost";
import Movie from "./Components/Movie/Movie";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={[
            <Navbar />,
            <Banner />,
            <RowPost url={orginals} title="Netflix Orginals" />,
            <RowPost url={action} title="Action" isSmall />,
          ]}
        />
        <Route path='/movie' element={[<Movie />]}/>
      </Routes>
    </div>
  );
}

export default App;
