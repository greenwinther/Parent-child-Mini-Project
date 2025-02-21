import "./PokemonTypeIcon.scss";
import { PokemonType, PokemonTypeColor } from "../../types/types";

interface PokemonTypeIconProps {
	type: PokemonType;
}

const PokemonTypeIcon = ({ type }: PokemonTypeIconProps) => (
	<img
		className="PokemonTypeIcon"
		src={`/src/components/PokemonTypeIcon/assets/${type.toLowerCase()}.svg`}
		alt={type}
		style={{ backgroundColor: `${PokemonTypeColor[type]}` }}
	/>
);

export default PokemonTypeIcon;
