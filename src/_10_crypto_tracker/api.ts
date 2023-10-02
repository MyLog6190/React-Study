const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`/v1/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`/v1/coins/${coinId}`).then((response) => response.json());
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`/v1/tickers/${coinId}`).then((response) => response.json());
}

export function fetchCoinHistory(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
  ).then((response) => response.json());
}
