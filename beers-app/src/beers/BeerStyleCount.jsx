const BeerStyleCount = ({ beers }) => {
	const redCount = beers.filter(b => b.beerStyle === 'Red').length;
	const ipaCount = beers.filter(b => b.beerStyle === 'IPA').length;
	return (
		<div>
			Red: {redCount} <br />
			IPA: {ipaCount}
		</div>
	);
};

export default BeerStyleCount;
