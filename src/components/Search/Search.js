import './Search.css';
import { useNavigate } from 'react-router';

function Search() {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche la soumission par défaut
        const form = e.target
        const formData = new FormData(form)
        console.log(formData)
        console.log(formData.get('search')) /* correspond au name de l’input */
        navigate(`/List/${formData.get('search')}`)  /* exemple /List/Titanic */
    }


    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="idSearch">Votre recherche</label>
                    <input id="idSearch" name="search" type="text" />

                </fieldset>
                <input type="submit" value="Rechercher" />
            </form>
        </div>
    );
}
export default Search;
