import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/Inputfield";
import { PokeList } from "./PokeList";

export const PokeForm = () => {
	const [pokets, setPokets] = useState<{ name: string; type: string }[]>([]);
	const [inputName, setInputName] = useState("");
	const [inputType, setInputType] = useState("");

	return (
		<>
			<InputField
				id="nameField"
				title="Name"
				value={inputName}
				onChange={(e) => {
					setInputName(e.target.value);
				}}
			/>
			<InputField
				id="typeField"
				title="Type"
				value={inputType}
				onChange={(e) => {
					setInputType(e.target.value);
				}}
			/>
			<Button
				id="submitBtn"
				title="Submit"
				onClick={() => setPokets([...pokets, { name: inputName, type: inputType }])}
			/>
			<PokeList pokets={pokets} setPokets={setPokets} inputName={inputName} inputType={inputType} />
		</>
	);
};
