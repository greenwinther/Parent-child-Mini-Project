import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/Inputfield";
import PokeCard from "./PokeCard";
import { Pokets } from "../types/types";

export const PokeForm = () => {
	const [pokets, setPokets] = useState<Pokets[]>([]);
	const [inputName, setInputName] = useState("");
	const [inputType, setInputType] = useState("");
	const [inputEvolutionStage, setInputEvolutionStage] = useState("");
	const [inputWeakness, setInputWeakness] = useState("");
	const [inputResistance, setInputResistance] = useState("");

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		setPokets([
			...pokets,
			{
				name: inputName,
				type: inputType,
				evolutionStage: inputEvolutionStage,
				weakness: inputWeakness,
				resistance: inputResistance,
			},
		]);

		setInputName("");
		setInputType("");
		setInputEvolutionStage("");
		setInputWeakness("");
		setInputResistance("");
	};

	return (
		<form>
			<InputField
				id="nameField"
				title="Name"
				value={inputName}
				onChange={(e) => setInputName(e.target.value)}
			/>
			<InputField
				id="typeField"
				title="Type"
				value={inputType}
				onChange={(e) => setInputType(e.target.value)}
			/>
			<InputField
				id="evolutionField"
				title="Evolution Stage"
				value={inputEvolutionStage}
				onChange={(e) => setInputEvolutionStage(e.target.value)}
			/>
			<InputField
				id="weaknessField"
				title="Weakness"
				value={inputWeakness}
				onChange={(e) => setInputWeakness(e.target.value)}
			/>
			<InputField
				id="resistanceField"
				title="Resistance"
				value={inputResistance}
				onChange={(e) => setInputResistance(e.target.value)}
			/>

			<Button id="submitBtn" title="Submit" onClick={handleSubmit} />
			<Button
				id="clearBtn"
				title="Clear"
				onClick={(e) => {
					e.preventDefault();
					setPokets([]);
				}}
			/>
			{pokets.map((poket) => (
				<PokeCard key={poket.name} poket={poket} setPokets={setPokets} />
			))}
		</form>
	);
};
