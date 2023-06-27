import { SET_POKEMONS } from "./types";
import { getPokemonDetails } from '../api'

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
});

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
    const pokemonsDetailed = await Promise.all(pokemon.map( pokemons => getPokemonDetails(pokemon)));
};