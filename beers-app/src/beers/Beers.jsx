import BeersList from './BeersList';
import AvailableBeers from './AvailableBeers';
import BeerStyleCount from './BeerStyleCount';
import BeerStyles from './BeersStyles';
import beers from './data';

const usdToArs = 1000;

const Beers = () => {
	return (
		<div>
			<h2>Todas las cervezas</h2>
			<BeersList beers={beers} usdToArs={usdToArs} />

			<h2>Solo disponibles</h2>
			<AvailableBeers beers={beers} usdToArs={usdToArs} />

			<h2>Cantidad de Red e IPA</h2>
			<BeerStyleCount beers={beers} />

			<h2>Estilos disponibles</h2>
			<BeerStyles beers={beers} />
		</div>
	);
};

export default Beers;
