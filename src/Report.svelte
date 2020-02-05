<script>
	export let market_cap_percentage_btc = 0;
	export let sum_total_market_cap = 0;
	export let market_cap_btc = 0;
	export let market_cap_usd = 0;
	/**
	$: sum_total_market_cap_intl = new Intl.NumberFormat('en', { notation: "compact" , compactDisplay: "long", style: 'currency', currency: 'USD', currencyDisplay: 'code', unitDisplay: 'long' }).format(sum_total_market_cap);
	*/
	const intlFormattingOption = {
		notation: 'compact',
		compactDisplay: 'long',
		currency: 'USD',
		currencyDisplay: 'code',
		unitDisplay: 'long'
	};
	const locale = 'en';
	function getIntlNum(number) {
		return new Intl.NumberFormat(locale, intlFormattingOption).format(
			Number.parseFloat(number, 10)
		);
	}
	$: sum_total_market_cap_intl = getIntlNum(market_cap_usd);

	$: market_cap_btc = market_cap_usd * market_cap_percentage_btc / 100;

	$: market_cap_btc_intl = getIntlNum((market_cap_usd * market_cap_percentage_btc / 100));

	$: market_cap_alt_intl = getIntlNum(
		Number.parseFloat(market_cap_usd, 10) -
			Number.parseFloat((market_cap_usd * market_cap_percentage_btc / 100), 10)
	);

	$: market_cap_percentage_btc_label = Number.parseFloat(
		market_cap_percentage_btc,
		10
	).toFixed(2);
	$: market_cap_percentage_rest_label = (
		100 - Number.parseFloat(market_cap_percentage_btc, 10)
	).toFixed(2);
</script>

<style>
	h3{
		margin-top: 4px;
		text-align: center;
		font-family: 'Roboto', sans-serif;
		font-weight: 100;
	}
	.report-summary {
		/* display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px; */
		
		width: 100%;
		max-width: 500px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		margin: -50px auto 0;
    	position: relative;
	}
	.report-summary-btc{
		padding-left: 20px;
	}
	.report-summary-alt{
		padding-right: 20px;
	}
	meter {
		display: block;
		width: 100%;
		max-width: 500px;
		height: 50px;
		/*-webkit-appearance: none;  Reset appearance */
		border: 1px solid #26a69a;
		border-radius: 25px;
		margin: 5em auto 1em;
		position: relative;
	}
	meter::-webkit-meter-bar {
		background: none; /* Required to get rid of the default background property */
		background-color: #03a9f4/*#262b3e*/;
		/*box-shadow: 0 5px 5px -5px #333 inset;*/
		border: 0px solid /*#f05250*/;
	}
	meter::-webkit-meter-suboptimum-value {
		background: none; /* Required to get rid of the default background property */
		background-color: green;
		border-radius: 5px;
		/*box-shadow: 0 5px 5px -5px #333 inset;*/
	}
	meter::-webkit-meter-optimum-value {
		background: none; /* Required to get rid of the default background property */
		background-color: yellowgreen;

	}
	meter::before {
		content: 'BTC ' attr(value) '%';
		position: absolute;
		top: -80%;
	}

	meter::after {
		content: 'Alts ' attr(data-alt) '%';
		position: absolute;
		top: -80%;
		right: 0;
	}
	meter::before, meter::after{
		font-family: 'Roboto Condensed', sans-serif;
		font-size: 1.5rem;
		font-weight: 300;
	}
</style>

<h3><i>Total crypto market cap:</i> USD {sum_total_market_cap_intl}</h3>

<meter
	id="marketcap"
	min="0"
	max="100"
	value={market_cap_percentage_btc_label}
	data-alt={market_cap_percentage_rest_label} 
			 />
<div class="report-summary">
	<div class="report-summary-btc">
		<div>USD {market_cap_btc_intl}</div>
		<!--<div>Up 2.3 billion (1.8 %)</div> -->
	</div>
	<div class="report-summary-alt">
		<div>USD {market_cap_alt_intl}</div>
		<!--<div>Down 0.1 billion W-o-W (0.15%)</div> -->
	</div>
</div>
