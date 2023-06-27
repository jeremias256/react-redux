/* ---------------------------------- react --------------------------------- */
import { useState, useEffect } from 'react';
/* -------------------------------------------------------------------------- */
/*                                 components                                 */
/* -------------------------------------------------------------------------- */
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { Col } from 'antd';
/* ---------------------------------- utils --------------------------------- */
import { getPokemon, getPokemonDetails } from './api';
/* ---------------------------------- redux --------------------------------- */
import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
/* --------------------------------- actions -------------------------------- */
import { setPokemons } from './actions';
/* --------------------------------- styles --------------------------------- */
import logo from './static/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector( state => state.pokemons);
  const dispatch = useDispatch();

  useEffect( () => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      // const pokemonsDetailed = await Promise.all(pokemonsRes.map( pokemon => getPokemonDetails(pokemon)));
      
      dispatch(setPokemons(pokemonsDetailed));
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
