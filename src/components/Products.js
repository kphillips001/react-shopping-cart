import React from 'react';

//Contexts
import ProviderContext from '../contexts/ProductContext'; 

// Components
import Product from './Product';

const Products = props => {
	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
