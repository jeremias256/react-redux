
import { useState, useEffect } from 'react';
/* -------------------------------------------------------------------------- */
/*                                 components                                 */
/* -------------------------------------------------------------------------- */
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { Col } from 'antd';
/* ---------------------------------- utils --------------------------------- */
import { getPokemon } from './api';
/* ---------------------------------- redux --------------------------------- */
import {connect} from 'react-redux';
/* --------------------------------- actions -------------------------------- */
import { setPokemons as setPokemonsActions } from './actions';
/* --------------------------------- styles --------------------------------- */
import logo from './static/logo.svg';
import './App.css';

function App({ pokemons, setPokemons }) {

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

const mapStateToProps = ( state ) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
