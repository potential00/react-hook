// src/App.js
import React, { useState } from 'react';
import './App.css';
import MovieList from './components/movieList';
import Filter from './components/FilterList';
import AddMovie from './components/addMovie';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL: 'https://i.pinimg.com/600x315/ed/d0/7b/edd07b98091ee85101641545cbab630b.jpg',
      rating: 4.8,
    },
    {
      title: 'Interstellar',
      description: 'A journey beyond the stars',
      posterURL: 'https://i5.walmartimages.com/seo/Interstellar-DVD_bd3b4a62-d296-4442-beb4-63be5a94b146.66aec37782cdbd07dd5b520df03743b1.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF',
      rating: 4.6,
    },
    // Add more initial movies if desired
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === '' || movie.rating >= parseFloat(filterRating))
    );
  });

  return (
    <div className="App">
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
