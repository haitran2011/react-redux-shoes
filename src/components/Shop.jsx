import React from 'react';
import Image from './Image';
import Typhography from './Typhography';

import { data } from '../data';
import ShopItem from './ShopItem';

function fakeAPI() {
  return new Promise((ressolve) => {
    setTimeout(() => {
      ressolve(data)
    }, 1000)
  })
}

function Shop() {
  const [dataSource, setDataSource] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  // call api
  React.useEffect(() => {
   async function fetchShoes() {
      setIsLoading(true);
      const response = await fakeAPI();

      setIsLoading(false);
      setDataSource(response)
   };

   fetchShoes();
  }, []); // run once time

  return (
    <div className="card">
      <div className="cardTop">
        <Image 
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
      </div>

      <Typhography className="cardTitle">Our Products</Typhography>

      <div className="cardBody">
        {isLoading && <div>Loading ...</div>}
        {dataSource.map(item => {
          return (
            <ShopItem key={item.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}

export default Shop