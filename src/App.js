import "./App.css";
import { useEffect } from "react";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=be2cf25b";

const movie1 = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2si00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}&t=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      
      <h1> Movieland </h1>

      <div className="search">
        <input placeholder="Search for movies..."
            value="Spiderman"
            onChange={( ) => {}} />
            <img src={SearchIcon} alt="search" 
            onClick={()=>{}}
            />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;
