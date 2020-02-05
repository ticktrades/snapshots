const got = require('got');

function getIntlNum(number) {
    const intlFormattingOption = {
        notation: 'compact',
        compactDisplay: 'long',
        currency: 'USD',
        currencyDisplay: 'code',
        unitDisplay: 'long'
    };
    const locale = 'en';
    return new Intl.NumberFormat(locale, intlFormattingOption).format(
        Number.parseFloat(number)
    );
}

async function getTradeData() {
    try {
        const { body } = await got('https://api.coingecko.com/api/v3/global');
        //console.log(body);
        const json = JSON.parse(body); //await response.json();

        const { market_cap_percentage, total_market_cap } = json.data;
        // console.log(total_market_cap);
        const sum_total_market_cap = Object.values(total_market_cap).reduce(
            (previous, current) =>
                Number.parseFloat(previous) + Number.parseFloat(current)
        );

        const market_cap_percentage_btc = market_cap_percentage.btc;
        const market_cap_percentage_btc_label = Number.parseFloat(
            market_cap_percentage_btc
        ).toFixed(2);

        const market_cap_percentage_rest_label = (
            100 - Number.parseFloat(market_cap_percentage_btc)
        ).toFixed(2);

        const market_cap_btc_intl = getIntlNum(
            (total_market_cap.usd * market_cap_percentage_btc) / 100
        );

		const market_cap_alt_intl = getIntlNum(total_market_cap.usd - ((total_market_cap.usd * market_cap_percentage_btc) / 100))
        return {
            market_cap_percentage_btc_label,
            market_cap_percentage_rest_label,
            market_cap_btc_intl: `USD ${market_cap_btc_intl}`,
            market_cap_alt_intl: `USD ${market_cap_alt_intl}`
        };
    } catch (error) {
        console.log(error);
        return new Error(error);
        //=> 'Internal server error ...'
    }
}
module.exports = async (req, res) => {
    const data = await getTradeData();
    res.status(200).send(JSON.stringify(data));
};
