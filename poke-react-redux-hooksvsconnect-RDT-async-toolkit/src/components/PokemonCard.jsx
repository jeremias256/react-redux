/* ---------------------------------- antd ---------------------------------- */
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
/* ------------------------------- components ------------------------------- */
import StarButton from './StarButton';
/* ---------------------------------- redux --------------------------------- */
import { useDispatch } from 'react-redux';
/* --------------------------------- slices -------------------------------- */
import { setFavorite } from '../slices/dataSlice';

const PokemonCard = ( {name, image, types, id, favorite} ) => {


  const dispatch = useDispatch();
  const typesString = types.map( (elem) => elem.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId:id}))
  }

  return( 
    <Card 
      style={{width:250}} 
      title={name} 
      cover={<img src={image} alt={name}/>}
      extra={<StarButton isFavorite={favorite} onClick={ handleOnFavorite }/>}
    >
      <Meta description={typesString}/>

    </Card>
  );
}

export default PokemonCard;

