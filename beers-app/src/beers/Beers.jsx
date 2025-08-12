import { useState } from 'react';
import BeersList from './BeersList';
import AvailableBeers from './AvailableBeers';
import BeerStyleCount from './BeerStyleCount';
import BeerStyles from './BeersStyles';
import ChangeDollar from './ChangeDollar';
import NewBeer from './NewBeer';
import beers from './data';

const Beers = () => {
	const [usdToArs, setUsdToArs] = useState(1350);
	const [showDollar, setShowDollar] = useState(true);
	const [beerList, setBeerList] = useState(beers);

	const handleChangeUsdToArs = newValue => setUsdToArs(newValue);
	const handleAddBeer = beer => setBeerList(prev => [...prev, { id: prev.length + 1, ...beer }]);

	return (
		<div>
			<button onClick={() => setShowDollar(!showDollar)}>
				{showDollar ? 'Ocultar' : 'Mostrar'} cambio USD a ARS
			</button>
			{showDollar && (
				<ChangeDollar usdToArs={usdToArs} onChangeDollar={handleChangeUsdToArs} />
			)}

			<h2>Agregar nueva cerveza</h2>
			<NewBeer onAdd={handleAddBeer} />

			<h2>Todas las cervezas</h2>
			<BeersList beers={beerList} usdToArs={usdToArs} />

			<h2>Solo disponibles</h2>
			<AvailableBeers beers={beerList} usdToArs={usdToArs} />

			<h2>Cantidad de Red e IPA</h2>
			<BeerStyleCount beers={beerList} />

			<h2>Estilos disponibles</h2>
			<BeerStyles beers={beerList} />
		</div>
	);
};

export default Beers;
