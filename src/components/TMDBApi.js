const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjU1OTczNjhjODc0ZmZkODQ3M2EwYTc1YjUxYzc0NCIsInN1YiI6IjY1M2ZhNTkzY2M5NjgzMDEwYjNmZmIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Adh4V1F62MoI7ZhKTQvjGYO_Z3OTU3p6xhV-KwWIE4Q";

//le paramètre text = film cherché, page = nombre de page voulu
export function getFilmsFromTMdbWithText(text, page) {

  const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN +
    "&language=fr&query=" + text + '&page=' + page;

  return fetch(url)
    .then((response) => response.json)
    .catch((error) => console.log(error))
}
