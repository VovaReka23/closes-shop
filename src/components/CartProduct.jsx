import React from 'react';
import { Link } from "react-router-dom";

const CartProduct = ({ imageUrl, name, description, price, count, id, onRemoveProduct, onPinProduct }) => {
	const removeProduct = () => {
		if (global.confirm('Do you want to delete the task?')) {
			onRemoveProduct(id);
		}
	};

	return (
		<div className={`product__list-item`}>
			{imageUrl && <img src={imageUrl} alt="product" />}
			{name && <h2 className='product__list-name'> <Link to={`/Product-app/${id}`}>{name}</Link></h2>}
			{description && <p className='product__list-description'>{description}</p>}
			{price && <span className='product__list-price'>{price}$</span>}
			{count && <p className='product__list-count'> <span>count: </span>{count}</p>}
			<button onClick={removeProduct} className="product__list-remove"></button>
		</div>
	);

};
export default CartProduct;

