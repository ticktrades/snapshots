<script>
	import Report from './Report.svelte';
	import Footer from './footer.svelte';
	function getCurrentWeekNumber() {
		const millisecondsInDay = 86400000; // 1000ms * 60s * 60m * 24h
		const daysInWeek = 7;
		const date = new Date();
		const firstDayOfWeek = new Date(
			Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
		);

		// The first week in the ISO definition starts with a week containing thursday.
		// This means we add 4 (thursday) and minus the current day of the week (UTC day || 7 (if UTC day is 0, which is sunday)) to the current UTC date
		firstDayOfWeek.setUTCDate(
			firstDayOfWeek.getUTCDate() +
				4 -
				(firstDayOfWeek.getUTCDay() || daysInWeek)
		);

		const firstDayOfYear = new Date(
			Date.UTC(firstDayOfWeek.getUTCFullYear(), 0, 1)
		);
		const timeDifference = Number(firstDayOfWeek, 10) - Number(firstDayOfYear, 10);
		const daysDifference = timeDifference / millisecondsInDay;

		return Math.ceil(daysDifference / daysInWeek);
	}

	async function getTradeData() {
		const response = await fetch('https://api.coingecko.com/api/v3/global');
		const json = await response.json();
		const { market_cap_percentage, total_market_cap } = json.data;
		console.log(total_market_cap);
		const sum_total_market_cap = Object.values(total_market_cap).reduce(
			(previous, current) =>
				Number.parseFloat(previous, 10) + Number.parseFloat(current, 10),
			0
		);

		return {
			market_cap_percentage,
			sum_total_market_cap,
			market_cap_btc: total_market_cap.btc,
			market_cap_usd: total_market_cap.usd
		};
	}

	let name = 'world';
	let tradeData = getTradeData();
</script>

<h1>Crypto Market Cap</h1>
<!-- <h2>Week {getCurrentWeekNumber()}</h2> -->

<section class="report">
	{#await tradeData}
		<p>...waiting</p>
	{:then trade}

		<Report
			market_cap_percentage_btc={trade.market_cap_percentage.btc}
			sum_total_market_cap={trade.sum_total_market_cap}
			market_cap_btc={trade.market_cap_btc} market_cap_usd={trade.market_cap_usd} />
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</section>
<Footer />