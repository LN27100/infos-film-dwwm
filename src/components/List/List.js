import { useParams } from 'react-router-dom';
  import './List.css';
  	
  function List() {
    const search = useParams()  /* récupération des paramètres de l’url */
    /* la variable search est un objet */
return (
<div className="container">
<h2>Liste des films</h2>
<p>{search.data}</p>  {/* data correspond au paramètre de la route */}
</div>
);
}
export default List;
