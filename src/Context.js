import { useState, createContext } from 'react';

function Context() {
	const CountContext = createContext();

	const CountProvider = props => {
		const [count, setCount] = useState(0);
		const state = { count, setCount };

		return(
			<CountContext.Provider value={ state }>
				{ props.children }
			</CountContext.Provider>
		);
	}

	return {
		CountContext,
		CountProvider
	}
}

export default Context();
