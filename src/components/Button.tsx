type ButtonProp = {
	title: string;
	id: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ title, id, onClick }: ButtonProp) => {
	return (
		<button id={id} onClick={onClick}>
			{title}
		</button>
	);
};

export default Button;
