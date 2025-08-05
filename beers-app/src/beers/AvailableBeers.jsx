const AvailableBeers = ({ beers, usdToArs }) => {
	const availableBeers = beers.filter(b => b.available);
	return (
		<ul>
			{availableBeers.map(beer => (
				<li key={beer.id}>
					{beer.beerName} - {beer.beerStyle} - ${beer.price * usdToArs} ARS
				</li>
			))}
		</ul>
	);
};

export default AvailableBeers;
