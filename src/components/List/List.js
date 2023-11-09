import { useParams } from 'react-router-dom';
import './List.css';
import {useEffect} from 'react'
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

  const films = [
    {
      poster: "../images/dwwm_1.png",
      abstarct: "Résumé du premier film"
    },
    {
      poster: "../images/dwwm_1.png",
      abstarct: "Résumé du deuxième film"
    },
    {
      poster: "../images/dwwm_1.png",
      abstarct: "Résumé du troisième film"
    },
  ]

  const search = useParams()  /* récupération des paramètres de l’url */
  /* la variable search est un objet */

  useEffect(() => {
    getFilmsFromTMdbWithText(search.data, 1)
      .then(data => {
        console.log(data.results);
      });
  }, []);
    
  return (

    <div className="container">
      <h2>Liste des films</h2>
      <p>{search.data}</p>  {/* data correspond au paramètre de la route */}

      {films.map((film) => {
        return (
          <Film poster={film.poster} abstract={film.abstarct} />
        )
      }
      )}

    </div>

  );
}
export default List;
