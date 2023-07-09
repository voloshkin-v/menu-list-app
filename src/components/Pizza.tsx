interface PizzaProps {
	data: {
		name: string;
		photoName: string;
		ingredients: string;
		price: number;
		soldOut: boolean;
	};
}

const Pizza = ({ data }: PizzaProps) => {
	const { photoName, ingredients, price, name, soldOut } = data;

	return (
		<li className={`pizza${soldOut ? ' sold-out' : ''}`}>
			<img src={photoName} alt={name} />
			<div>
				<h3>{name}</h3>
				<p>{ingredients}</p>
				<span>{!soldOut ? `${price}$` : 'SOLD OUT'}</span>
			</div>
		</li>
	);
};

export default Pizza;
