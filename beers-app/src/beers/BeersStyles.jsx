const BeerStyles = ({ beers }) => {
	const uniqueStyles = Array.from(new Set(beers.map(b => b.beerStyle)));
	return (
		<ul>
			{uniqueStyles.map(style => (
				<li key={style}>{style}</li>
			))}
		</ul>
	);
};

export default BeerStyles;
