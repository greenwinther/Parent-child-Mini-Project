import Button from "../components/Button";
import Pokets from "../types/types";
import { useState } from "react";

type PokeCardProps = {
	poket: Pokets;
	setPokets: React.Dispatch<React.SetStateAction<Pokets[]>>;
};

const PokeCard = ({ poket, setPokets }: PokeCardProps) => {
	// Track edit mode
	const [isEditing, setIsEditing] = useState(false);
	// Store temporary input values
	const [editValues, setEditValues] = useState({ ...poket });

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Pokets) => {
		setEditValues({ ...editValues, [field]: e.target.value });
	};

	const saveChanges = () => {
		setPokets((prevPokets) => prevPokets.map((p) => (p.name === poket.name ? { ...editValues } : p)));
		setIsEditing(false); // Exit edit mode
	};

	const attributes = [
		{ label: "Type", key: "type" },
		{ label: "Evolution Stage", key: "evolutionStage" },
		{ label: "Weakness", key: "weakness" },
		{ label: "Resistance", key: "resistance" },
	] as const; // `as const` ensures TypeScript knows keys are valid

	return (
		<div key={poket.name}>
			<h3>
				{"Name: "}
				{isEditing ? (
					<input
						type="text"
						value={editValues.name}
						onChange={(e) => handleInputChange(e, "name")}
					/>
				) : (
					poket.name
				)}
			</h3>

			{attributes.map(({ label, key }) => (
				<p key={key}>
					{label}:{" "}
					{isEditing ? (
						<input
							type="text"
							value={editValues[key]}
							onChange={(e) => handleInputChange(e, key)}
						/>
					) : (
						poket[key]
					)}
				</p>
			))}

			<Button
				id="removeBtn"
				title="Remove"
				onClick={() => setPokets((prev) => prev.filter((p) => p.name !== poket.name))}
			/>
			<Button
				id="editBtn"
				title={isEditing ? "Save" : "Edit"}
				onClick={isEditing ? saveChanges : () => setIsEditing(true)}
			/>
		</div>
	);
};

export default PokeCard;
