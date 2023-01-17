import React from 'react';

import CardGroup from 'react-bootstrap/CardGroup';
import Card2 from '../Card2/Card2';


const CardGroup2 = () => {
  const products = [
    {id:1, name:'Laptop', price: 14000},
    {id:2, name:'Phone', price: 24000},
    {id:3, name:'Watch', price: 45000}
  ]
    return (
        <div>
     <CardGroup>
     {
      products.map(product => <Card2
      key={product.id}
      product={product}
      ></Card2>)
     }
    </CardGroup>
        </div>
    );
};

export default CardGroup2;