import { createStore } from 'redux';

const initialState = {
	count: 5
};


const reducer = (state = initialState, action) => {
	console.log('actionnya adalah', action);

	switch(action.type) {
		case 'INCREMENT' :
			return Object.assign({}, state, { count: state.count + 1 });
		// eslint-disable-next-line
		break;
		case 'DECREMENT' :
			return Object.assign({}, state, { count: state.count - 1 });
		// eslint-disable-next-line
		break;
		// eslint-disable-next-line
		default :
			return state;
	}
	// eslint-disable-next-line
	return state;
}

export default createStore(reducer);
