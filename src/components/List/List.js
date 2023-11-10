import { useParams } from 'react-router-dom';
import './List.css';
import { useState, useEffect } from 'react'
import { getFilmsFromTMdbWithText } from '../TMDBApi.js';


function Film({ poster, abstract }) {
  return (
    <div>
      <img src={poster} alt="Film Poster" />
      <p>{abstract}</p>
    </div>
  );
}

function List() {

  const [films, setFilms] = useState([])

  const search = useParams()  /* récupération des paramètres de l’url */
  /* la variable search est un objet */

  useEffect(() => {
    getFilmsFromTMdbWithText(search.data, 1)
      .then(data => { setFilms(data.results) })
  }, []);

  return (

    <div className="container">
      <h2>Liste des films</h2>
      <p>{search.data}</p>  {/* data correspond au paramètre de la route */}

      {films.map((film) => {
        return (
          <Film key={film.id} poster={film.poster_path}	abstract={film.overview} />

        )
      }
      )}

    </div>

  );
}
export default List;
