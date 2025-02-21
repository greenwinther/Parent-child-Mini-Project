type InputFieldProp = {
	title: string;
	id: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({ title, id, value, onChange }: InputFieldProp) => {
	return (
		<div>
			<label htmlFor={id}>{title}</label>
			<input type="text" id={id} value={value} onChange={onChange} />
		</div>
	);
};

export default InputField;
