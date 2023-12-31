
import { useState, useEffect } from 'react';
/* -------------------------------------------------------------------------- */
/*                                 components                                 */
/* -------------------------------------------------------------------------- */
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { Col } from 'antd';
/* ---------------------------------- utils --------------------------------- */
import { getPokemon } from './api';
/* --------------------------------- styles --------------------------------- */
import logo from './static/logo.svg';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect( () => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
