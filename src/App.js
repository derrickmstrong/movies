import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./api/axiosConfig";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log('Data', response.data);
      setMovies(response.data);
    } catch (error) {
      console.error('Err', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div className="App"></div>;
}

export default App;
