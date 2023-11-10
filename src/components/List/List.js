import { useParams } from 'react-router-dom';
import './List.css';
import { useState, useEffect } from 'react'
import { getFilmsFromTMdbWithText } from '../TMDBApi.js';
import Film from './Film';  // Assurez-vous d'importer la bonne version de Film

function List() {
  const [films, setFilms] = useState([]);
  const search = useParams();

  useEffect(() => {
    getFilmsFromTMdbWithText(search.data, 1)
      .then(data => { setFilms(data.results) })
  }, [search.data]);  // Assurez-vous de mettre search.data dans la dépendance du useEffect

  return (
    <div className="container">
      <h2>Liste des films</h2>
      <p>{search.data}</p>

      {films.map((film) => (
        <Film key={film.id} poster={film.poster_path} abstract={film.overview} />
      ))}
    </div>
  );
}

export default List;