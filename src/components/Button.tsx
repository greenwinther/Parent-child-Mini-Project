type ButtonProp = {
	title: string;
	id: string;
	onClick: () => void;
};

const Button = ({ title, id, onClick }: ButtonProp) => {
	return (
		<button id={id} onClick={onClick}>
			{title}
		</button>
	);
};

export default Button;
