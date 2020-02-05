import {
    APIGatewayEventRequestContext,
    APIGatewayEvent
} from 'https://deno.land/x/lambda/mod.ts';

async function getTradeData() {
    const response = await fetch('https://api.coingecko.com/api/v3/global');
    const json = await response.json();
    const { market_cap_percentage, total_market_cap } = json.data;
    // console.log(total_market_cap);
    const sum_total_market_cap = Object.values(total_market_cap).reduce(
        (previous: number, current: number) =>
            Number.parseFloat(previous) + Number.parseFloat(current),
        0
    );

    return {
        market_cap_percentage,
        sum_total_market_cap,
        market_cap_btc: total_market_cap.btc,
        market_cap_usd: total_market_cap.usd
    };
}

export async function handler(
    event: APIGatewayEvent,
    context: APIGatewayEventRequestContext
) {
    const data = await getTradeData();
    return {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    };
}
