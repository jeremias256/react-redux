import { SET_POKEMONS } from '../actions/types';

const initialState = {
    pokemons: [],
};

export const pokemonsReducer = ( state = initialState, action) => {

    // console.log(action) //! {type: 'SET_POKEMONS', payload: Array(150)} 
    switch( action.type ) {
        
        case SET_POKEMONS: 
            return {...state, pokemons: action.payload };
        default:
            return state;
        
    }

}; 