/* ---------------------------------- react --------------------------------- */
import { useState, useEffect } from 'react';
/* -------------------------------------------------------------------------- */
/*                                 components                                 */
/* -------------------------------------------------------------------------- */
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { Col, Spin } from 'antd';
/* ---------------------------------- utils --------------------------------- */
import { getPokemon, getPokemonDetails } from './api';
/* ---------------------------------- redux --------------------------------- */
import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
/* --------------------------------- actions -------------------------------- */
import { getPokemonsWithDetails, setLoading } from './actions';
/* --------------------------------- styles --------------------------------- */
import logo from './static/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector( state => state.pokemons);
  const loading = useSelector( state => state.loading);

  const dispatch = useDispatch();

  useEffect( () => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));

      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));

      dispatch(setLoading(false));
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

      {loading 
      ? <Col offset={12}><Spin spinning size='large'/></Col>
      :<PokemonList pokemons={pokemons}/>}

    </div>
  );
}



export default App;
