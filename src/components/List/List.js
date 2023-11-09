import { useParams } from 'react-router-dom';
  import './List.css';
  	
  function List() {

    const films = [
      { poster: "../images/dwwm_1.png",
        abstarct: "Résumé du premier film"
      },
      { poster: "../images/dwwm_1.png",
        abstarct: "Résumé du duxième film"
      },
      { poster: "../images/dwwm_1.png",
        abstarct: "Résumé du troisième film"
      },
    ]

    const search = useParams()  /* récupération des paramètres de l’url */
    /* la variable search est un objet */
return (
<div className="container">
<h2>Liste des films</h2>
<p>{search.data}</p>  {/* data correspond au paramètre de la route */}
{films.map((film) => {
  return (
    <film poster={film.poster} abstract={film.abstarct} />
  )}
)}

</div>
);
}
export default List;
