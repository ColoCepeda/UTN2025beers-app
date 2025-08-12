import { useState } from "react";

const initialForm = {
    beerName: '',
    beerStyle: '',
    price: '',
    available: true,
};

const NewBeer = ({onAdd}) => {
    const [form, setForm] = useState(initialForm);

    const handleBeerNameChange = e => {
        setForm(prev => ({...prev, beerName:e.target.value}))
    };

    const handleBeerStyleChange = e => {
        setForm(prev => ({...prev, beerStyle: e.target.value}))
    };
    const handleBeerPriceChange = e => {
        setForm(prev => ({...prev, price: e.target.value}))
    };

    const handleBeerAvailableChange= e => {
        setForm(prev => ({...prev, available: e.target.checked}))
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!form.beerName.trim() || !form.beerStyle.trim() || form.price === '') return;

        onAdd({
            beerName: form.beerName.trim(),
            beerStyle: form.beerStyle.trim(),
            price: Number(form.price),
            available: form.available,

        });
        setForm(initialForm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="beerName" placeholder="Nombre" value={form.beerName} onChange={handleBeerNameChange} />
            <input name="beerStyle" placeholder="Estilo" value={form.beerStyle} onChange={handleBeerStyleChange} />
            <input name="price" placeholder="Precio" value={form.price} onChange={handleBeerPriceChange} />
            <label>
                Disponible
                <input name="available" type="checkbox" checked={form.available} onChange={handleBeerAvailableChange} />
            </label>
            <button type="submit">Agregar Cerveza </button>

        </form>
    )

}

export default NewBeer;