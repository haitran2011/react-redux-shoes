import React from 'react';
import Image from './Image';
import Typhography from './Typhography';

function Shop() {
  return (
    <div className="card">
      <div className="cardTop">
        <Image 
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
      </div>

      <Typhography className="cardTitle">Our Products</Typhography>

      <div className="cardBody">
        <div className="shopItem">
          <div
            className="shopItem_image"
            style={{ backgroundColor: "rgb(212, 215, 214)" }}
          >
            <Image 
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png"
            />
          </div>
          <Typhography className="shopItem_name">Nike Air Zoom Pegasus 36</Typhography>
          <Typhography className="shopItem_description">
            The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh
            that targets breathability across high-heat areas. A slimmer heel
            collar and tongue reduce bulk, while exposed cables give you a
            snug fit at higher speeds.
          </Typhography>
          <div className="shopItem_bottom">
            <Typhography className="shopItem_price">$108.97</Typhography>
            <Typhography className="shopItem_button">ADD TO CART</Typhography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop