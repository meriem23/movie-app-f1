import { useState } from "react";
import MovieList from "./components/MovieList";
import FilterMovie from "./components/FilterMovie";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Lara Croft: Tomb Raider",
      rate: 5,
      description:
        "Video game adventurer Lara Croft comes to life in a movie where she races against time and villains to recover powerful ancient artifacts.",
      img:
        "https://i.pinimg.com/originals/1f/fb/7b/1ffb7bf9849eb6a0f216290e302bf647.jpg",
    },
    {
      title: "Avengers",
      rate: 4,
      description:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki from enslaving humanity.",
      img:
        "https://i.pinimg.com/originals/7a/94/80/7a94808dbb3a9a6d922d0780bc9be03d.jpg",
    },
  ]);
  const addNewMovie = (newMovie) => {
    setMovies(movies.concat(newMovie));
  };
  const [keyWord, setKeyWord] = useState("");
  const [keyRate, setKeyRate] = useState(1);
  const search = (word) => {
    setKeyWord(word);
  };
  return (
    <div>
      <FilterMovie keyRate={keyRate} setKeyRate={setKeyRate} search={search} />
      <MovieList
        movies={movies.filter(
          (movie) =>
            movie.rate >= keyRate &&
            movie.title.toLowerCase().includes(keyWord.toLowerCase().trim())
        )}
        addNewMovie={addNewMovie}
      />
    </div>
  );
}

export default App;
