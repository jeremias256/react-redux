import {StarOutlined} from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const PokemonCard = ( {name} ) => {
  return( 
    <Card 
        style={{width:250}} 
        title={name} 
        cover={<img src="imagen" alt={name}/>}
        extra={<StarOutlined/>}
    >
        <Meta description='fire, magic'/>
    </Card>
  );
}

export default PokemonCard;

