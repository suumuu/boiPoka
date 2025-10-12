import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({product}) => {
    const {id} = product
    return (
        <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
  <figure className='h-48 0verflow-hidden'>
    <img src={product.image}
      alt="furniture" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.description}</p>
    <h1>Price: ${product.price}</h1>
    <div className="card-actions justify-end">
      <Link to={`/product/${id}`} className="btn btn-outline">View Details</Link>
    </div>
  </div>
</div>
    );
};

export default ProductCard;