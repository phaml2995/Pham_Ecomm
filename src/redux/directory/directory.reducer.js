const INITIAL_STATE = {
	sections: [{
        title: 'HATS',
        imageUrl: 'https://data.whicdn.com/images/17201270/original.jpg',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'JACKETS',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'SNEAKERS',
        imageUrl: 'https://pm1.narvii.com/6451/ec08b299adfc9072db6431fc1d64e7435b3f9230_hq.jpg',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'WOMENS',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'MENS',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		default:
			return state;
	}
}

export default directoryReducer;