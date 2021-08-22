

export const getProducts = (item) => ({
	type: 'GET_PRODUCTS',
	payload: item,
});

export const addProducts = ({ imageUrl, name, description, price, count, weight, width, height }) => ({
	type: 'ADD_PRODUCTS',
	payload: { imageUrl, name, description, price, count, weight, width, height },
});
export const editProducts = ({ id, imageUrl, name, description, price, count, weight, width, height }) => ({
	type: 'EDIT_PRODUCTS',
	payload: { id, imageUrl, name, description, price, count, weight, width, height },
});

export const removeProduct = (id) => ({
	type: 'REMOVE_PRODUCT',
	payload: id,
});

export const sortProduct = (sort) => ({
	type: 'SORT_BY_COUNT_PRODUCT',
	payload: sort
});

export const searchProducts = (search) => ({
	type: 'SEARCH_PRODUCTS',
	payload: search,
});

export const getComments = (item) => ({
	type: 'GET_COMMENTS',
	payload: item,
});

export const setComments = (comments) => ({
	type: 'SET_COMMENTS',
	payload: comments,
});
export const addComment = (productId, auther, description, date) => ({
	type: 'ADD_COMMENT',
	payload: { productId, auther, description, date },
});



