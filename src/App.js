import store from './store';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
			<Counter store={ store } />
    </div>
  );
}

export default App;
