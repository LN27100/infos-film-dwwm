import './App.css';
import Home from './Home/Home';

function App() {

  const clicBouton = () => alert('bouton cliqué')

  return (
    <div className="App">
      <Home />

      <button className="App-button" onClick={ clicBouton }>Modifier l’animation</button>

    </div>
  );
}

export default App;
