import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import  CollectionPreivew  from '../preview-collection/preview-collection.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
	<div className="collections-overview">
		{
			collections.map(({id, ...otherCollectionProps}) => (
				<CollectionPreivew key = {id} {...otherCollectionProps} />
			))
		}
	</div>

)

const mapStatesToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
})

export default connect(mapStatesToProps)(CollectionsOverview);