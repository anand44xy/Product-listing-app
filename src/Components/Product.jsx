import React from 'react';

function Product({ id, name, img, rating }) {
  return (
    <div className="col-md-4 gy-3 col-lg-3 col-6">
      <div className="card">
        <img src={img} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Rating: {rating}⭐</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
