
/* -------------------------------- immutable ------------------------------- */
import { fromJS, getIn, setIn, get } from 'immutable';
/* --------------------------------- actions -------------------------------- */
import { SET_POKEMONS, SET_FAVORITE } from '../actions/types';


const initialState = fromJS({
    pokemons: [],
});

export const pokemonsReducer = ( state = initialState, action) => {

    switch( action.type ) {
        
        case SET_POKEMONS: 
            return setIn(state, ['pokemons'], fromJS(action.payload));

        case SET_FAVORITE:
            const currentPokemonIndex = getIn(state, ['pokemons']).findIndex(
                (pokemon) => pokemon.get('id') === action.payload.pokemonId
            );

            if (currentPokemonIndex < 0){
                return state;
            }

            const isFavorite = getIn(state, ['pokemons', currentPokemonIndex, 'favorite']);
            
            return setIn(state, ['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);

        default:
            return state;
        
    }

}; 
