export type Pokets = {
	name: string;
	type: string; // TODO: PokemonType
	evolutionStage: string;
	weakness: string; // NumberedType
	resistance: string; // NumberedType
};

export type NumberedType = {
	type: PokemonType;
	amount: number;
};

export type PokemonType =
	| "Fire"
	| "Water"
	| "Grass"
	| "Electric"
	| "Ice"
	| "Fighting"
	| "Poison"
	| "Ground"
	| "Flying"
	| "Psychic"
	| "Bug"
	| "Rock"
	| "Ghost"
	| "Dark"
	| "Dragon"
	| "Steel"
	| "Fairy";
