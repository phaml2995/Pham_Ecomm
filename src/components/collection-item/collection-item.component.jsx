import React from 'react';

import './collection-item.styles.scss'

const CollectionItem = ({id, name, imageUrl, price}) => (
	<div className = 'collection-item'>
		<div 
			className = 'image'
			style = {{
				backgroundImage: `url(${imageUrl})`
			}}
		/>	

		<div className = 'collection-footer'>
			<span dlassName = 'name'>{name}</span>
			<span dlassName = 'price'>{price}</span>
		</div>
	</div>
);

export default CollectionItem;