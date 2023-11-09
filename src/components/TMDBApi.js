//le paramètre text = film cherché, page = nombre de page voulu

export function getFilmsFromTMdbWithText(text, page) {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
    }
  };
  
  
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=fr-FR&page=${page}`, options)
      .then((response) => response.json())
      .catch((error) => console.log(error))
  }