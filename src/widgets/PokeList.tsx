import { useRef } from "react";
import Button from "../components/Button";

type PokeListProp = {
	pokets: { name: string; type: string }[];
	inputName: string;
	inputType: string;
	setPokets: React.Dispatch<React.SetStateAction<{ name: string; type: string }[]>>;
};

export const PokeList = ({ pokets, inputName, inputType, setPokets }: PokeListProp) => {
	return (
		<>
			{pokets.map((poket) => (
				<div key={poket.name}>
					<h3>
						{"Name: "}
						{poket.name}
					</h3>
					<p>
						{"Type: "} {poket.type}
					</p>
					<p>{"Evolution stage"}</p>
					<p>{"Weakness"}</p>
					<p>{"Resistance"}</p>
					<Button
						id="removeBtn"
						title="Remove"
						onClick={() => setPokets(pokets.filter((a) => a !== poket))}
					/>
					<Button
						id="editBtn"
						title="Edit"
						onClick={() =>
							setPokets(
								pokets.map((e) =>
									e.name === poket.name ? { ...e, name: inputName, type: inputType } : e
								)
							)
						}
					/>
				</div>
			))}
		</>
	);
};
