import "./App.scss";
import PokemonTypeIcon from "./components/PokemonTypeIcon/PokemonTypeIcon";
import { PokeForm } from "./widgets/PokeForm";

function App() {
	return (
		<>
			<PokeForm />
			<PokemonTypeIcon type="Bug" />
			<PokemonTypeIcon type="Fairy" />
		</>
	);
}

export default App;
