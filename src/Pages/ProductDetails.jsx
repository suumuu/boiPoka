import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';

const ProductDetails = () => {
    const {id} = useParams();
    const {products,loading}=useProducts()
    const product = products.find (p => String(p.id) === id)
    
    if (loading) return <p>Loading...</p>
        const {name, description, price, image} = product

    const handleAddToWishlist = () => {
        
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        let updatedList = []
        if (existingList){
            updatedList = [...existingList, product]
        } else {
            updatedList.push(product)
        }
        localStorage.setItem('wishlist', JSON.stringify(updatedList))
    }

    
    return (
                <div className="card bg-base-100 border shadow-sm">
  <figure className='h-48 0verflow-hidden'>
    <img src={image}
      alt="furniture" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <h1>Price: ${price}</h1>
    <div className="card-actions justify-end">
      <button onClick={handleAddToWishlist} className="btn btn-outline">Add to Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default ProductDetails;