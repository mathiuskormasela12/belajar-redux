import { connect } from 'react-redux';

function Counter(props) {
	return(
		<div>
			<h1>Belajar Redux</h1>
			<p> Point : { props.count }</p>
			<button type="button" onClick={ props.onIncrementClick }>Increment</button>
			<button type="button" onClick={ props.onDecrementClick }>Decrement</button>
		</div>
	);
}

function mapStateToProps(state) {
	console.log('mapStateToProps', state);
	return {
		count: state.count
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onIncrementClick: () => {
			console.log('button Increment di klik')
			const action = {
				type: 'INCREMENT'
			};
			dispatch(action);
		},
		onDecrementClick: () => {
			console.log('button Decrement di klik');
			const action = { type: 'DECREMENT'};
			dispatch(action);
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
