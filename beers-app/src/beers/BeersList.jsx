const BeersList = ({ beers, usdToArs }) => (
	<ul>
		{beers.map(beer => (
			<li key={beer.id}>
				{beer.beerName} - {beer.beerStyle} - ${beer.price * usdToArs} ARS {beer.available ? '(Disponible)' : '(No disponible)'}
			</li>
		))}
	</ul>
);

export default BeersList;
