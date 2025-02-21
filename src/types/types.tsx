export type Pokets = {
	name: string;
	type: string; // TODO: PokemonType
	evolutionStage: string;
	weakness: string; // NumberedType
	resistance: string; // NumberedType
};

export type PokemonTypeStat = {
	type: PokemonType;
	amount: number;
};

export type PokemonType =
	| "Bug"
	| "Dark"
	| "Dragon"
	| "Electric"
	| "Fairy"
	| "Fighting"
	| "Fire"
	| "Flying"
	| "Ghost"
	| "Grass"
	| "Ground"
	| "Ice"
	| "Normal"
	| "Poison"
	| "Psychic"
	| "Rock"
	| "Steel"
	| "Water";

export const PokemonTypeColor = {
	Bug: "#A8B820",
	Dark: "#705848",
	Dragon: "#7038F8",
	Electric: "#F8D030",
	Fairy: "#EE99AC",
	Fighting: "#C03028",
	Fire: "#F08030",
	Flying: "#A890F0",
	Ghost: "#705898",
	Grass: "#78C850",
	Ground: "#E0C068",
	Ice: "#98D8D8",
	Normal: "#A8A878",
	Poison: "#A040A0",
	Psychic: "#F85888",
	Rock: "#B8A038",
	Steel: "#B8B8D0",
	Water: "#6890F0",
};
