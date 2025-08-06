const ChangeDollar = ({ usdToArs, onChangeDollar }) => {
	const handleChange = (e) => {
		onChangeDollar(Number(e.target.value));
	};
	return (
		<label>
			Dólar (ARS):
			<input
				type="number"
				value={usdToArs}
				onChange={handleChange}
				min={0}
			/>
		</label>
	);
};

export default ChangeDollar;
