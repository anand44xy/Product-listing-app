import React from 'react';

function Product({ id, name, img, rating, price }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 gy-3 col-lg-3 col-6">
      <div className="card h-100">
        <img src={img} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className='card-text'>Price: {price} $</p>
          <p className="card-text">Rating: {rating}⭐</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
