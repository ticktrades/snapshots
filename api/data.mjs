import got from 'got';

async function getTradeData() {
	try {
		const response = await got('https://api.coingecko.com/api/v3/global');
		//console.log(body);
		const json = response.body; //await response.json();
		console.log(typeof json);
		const { market_cap_percentage, total_market_cap } = JSON.parse(
			json
		).data;
		// console.log(total_market_cap);
		const sum_total_market_cap = Object.values(total_market_cap).reduce(
			(previous, current) =>
				Number.parseFloat(previous) + Number.parseFloat(current),
			0
		);

		return {
			market_cap_percentage,
			sum_total_market_cap,
			market_cap_btc: total_market_cap.btc,
			market_cap_usd: total_market_cap.usd
		};
	} catch (error) {
		console.log(error);
		//=> 'Internal server error ...'
	}
}
async function data(request, response) {
	const data = await getTradeData();
	response.status(200).send(JSON.stringify(data));
}

export { data };
