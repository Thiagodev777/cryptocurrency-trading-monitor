// API -> CRIPTOS / MERCADO BITCOIN / https://www.mercadobitcoin.net/api/BTC/ticker/
let cardano = document.getElementById('ADA')
let solana = document.getElementById('SOL')
let axie_infinity = document.getElementById('AXS')
let bitcoin = document.getElementById('BTC')
let dogecoin = document.getElementById('DOGE')
let polkadot = document.getElementById('DOT')
let ethereum = document.getElementById('ETH')

let menu_mobile = document.getElementById('menu-mobile')
let menu_coin_aside = document.getElementById('menu-coin')
menu_mobile.addEventListener('click', ()=>{
  if(menu_coin_aside.style.display == 'none'){
    menu_coin_aside.style.display = 'flex'
  } else {
    menu_coin_aside.style.display = 'none'
  }
})

let resultado = document.getElementById('resultado_h1')
let image_c = document.getElementById('image_c')
let maior_preco_un_negociacao_24h_high = document.getElementById('maior_preco_un_negociacao_24h_high')
let menor_preco_un_negociacao_24h_low = document.getElementById('menor_preco_un_negociacao_24h_low')
let quantidade_negociada_ultimas_24h_vol = document.getElementById('quantidade_negociada_ultimas_24h_vol')
let preco_unitario_ultima_negociacao_last = document.getElementById('preco_unitario_ultima_negociacao_last')
let maior_preco_oferta_compra_24h_buy = document.getElementById('maior_preco_oferta_compra_24h_buy')
let menor_preco_oferta_venda_24h_sell = document.getElementById('menor_preco_oferta_venda_24h_sell')

// CALL FUNCTIONS COIN
cardano.addEventListener('click', cardano_get)
solana.addEventListener('click', solana_get)
axie_infinity.addEventListener('click', axieinfinity_get)
bitcoin.addEventListener('click', bitcoin_get)
dogecoin.addEventListener('click', dogecoin_get)
polkadot.addEventListener('click', polkadot_get)
ethereum.addEventListener('click', ethereum_get)

async function cardano_get() {
  let response = await fetch('https://www.mercadobitcoin.net/api/ADA/ticker/')
  let json = await response.json()
  resultado.innerText = 'CARDANO'
  image_c.setAttribute('src', './images/cardano.jpeg');
  let { buy, high, last, low, sell, vol } = json.ticker
  maior_preco_un_negociacao_24h_high.innerText = `${high} ADA`
  menor_preco_un_negociacao_24h_low.innerText = `${low} ADA`
  quantidade_negociada_ultimas_24h_vol.innerText = `${vol} ADA`
  preco_unitario_ultima_negociacao_last.innerText = `${last} ADA`
  maior_preco_oferta_compra_24h_buy.innerText = `${buy} ADA`
  menor_preco_oferta_venda_24h_sell.innerText = `${sell} ADA`
}

async function solana_get() {
  let response = await fetch('https://www.mercadobitcoin.net/api/SOL/ticker/')
  let json = await response.json()
  resultado.innerText = 'SOLANA'
  image_c.setAttribute('src', './images/Solana.jpg');
  let { buy, high, last, low, sell, vol } = json.ticker
  maior_preco_un_negociacao_24h_high.innerText = `${high} SOL`
  menor_preco_un_negociacao_24h_low.innerText = `${low} SOL`
  quantidade_negociada_ultimas_24h_vol.innerText = `${vol} SOL`
  preco_unitario_ultima_negociacao_last.innerText = `${last} SOL`
  maior_preco_oferta_compra_24h_buy.innerText = `${buy} SOL`
  menor_preco_oferta_venda_24h_sell.innerText = `${sell} SOL`
}

async function axieinfinity_get() {
  let response = await fetch('https://www.mercadobitcoin.net/api/AXS/ticker/')
  let json = await response.json()
  resultado.innerText = 'AXIE INFINITY'
  image_c.setAttribute('src', './images/axieinfinity.jpeg');
  let { buy, high, last, low, sell, vol } = json.ticker
  maior_preco_un_negociacao_24h_high.innerText = `${high} AXS`
  menor_preco_un_negociacao_24h_low.innerText = `${low} AXS`
  quantidade_negociada_ultimas_24h_vol.innerText = `${vol} AXS`
  preco_unitario_ultima_negociacao_last.innerText = `${last} AXS`
  maior_preco_oferta_compra_24h_buy.innerText = `${buy} AXS`
  menor_preco_oferta_venda_24h_sell.innerText = `${sell} AXS`
}

async function bitcoin_get() {
  let response = await fetch('https://www.mercadobitcoin.net/api/BTC/ticker/')
  let json = await response.json()
  resultado.innerText = 'BITCOIN'
  image_c.setAttribute('src', './images/bitcoin.jpg');
  let { buy, high, last, low, sell, vol } = json.ticker
  maior_preco_un_negociacao_24h_high.innerText = `${high} BTC`
  menor_preco_un_negociacao_24h_low.innerText = `${low} BTC`
  quantidade_negociada_ultimas_24h_vol.innerText = `${vol} BTC`
  preco_unitario_ultima_negociacao_last.innerText = `${last} BTC`
  maior_preco_oferta_compra_24h_buy.innerText = `${buy} BTC`
  menor_preco_oferta_venda_24h_sell.innerText = `${sell} BTC`
}

async function dogecoin_get() {
  let response = await fetch('https://www.mercadobitcoin.net/api/DOGE/ticker/')
  let json = await response.json()
  resultado.innerText = 'DOGECOIN'
  image_c.setAttribute('src', './images/dogecoin.jpg');
  let { buy, high, last, low, sell, vol } = json.ticker
  maior_preco_un_negociacao_24h_high.innerText = `${high} DOGE`
  menor_preco_un_negociacao_24h_low.innerText = `${low} DOGE`
  quantidade_negociada_ultimas_24h_vol.innerText = `${vol} DOGE`
  preco_unitario_ultima_negociacao_last.innerText = `${last} DOGE`
  maior_preco_oferta_compra_24h_buy.innerText = `${buy} DOGE`
  menor_preco_oferta_venda_24h_sell.innerText = `${sell} DOGE`
}

async function polkadot_get() {
  let response = await fetch('https://www.mercadobitcoin.net/api/DOT/ticker/')
  let json = await response.json()
  resultado.innerText = 'POLKADOT'
  image_c.setAttribute('src', './images/Polkadot.png');
  let { buy, high, last, low, sell, vol } = json.ticker
  maior_preco_un_negociacao_24h_high.innerText = `${high} DOT`
  menor_preco_un_negociacao_24h_low.innerText = `${low} DOT`
  quantidade_negociada_ultimas_24h_vol.innerText = `${vol} DOT`
  preco_unitario_ultima_negociacao_last.innerText = `${last} DOT`
  maior_preco_oferta_compra_24h_buy.innerText = `${buy} DOT`
  menor_preco_oferta_venda_24h_sell.innerText = `${sell} DOT`
}

async function ethereum_get() {
  let response = await fetch('https://www.mercadobitcoin.net/api/ETH/ticker/')
  let json = await response.json()
  resultado.innerText = 'ETHEREUM'
  image_c.setAttribute('src', './images/ethereum.jpg');
  let { buy, high, last, low, sell, vol } = json.ticker
  maior_preco_un_negociacao_24h_high.innerText = `${high} ETH`
  menor_preco_un_negociacao_24h_low.innerText = `${low} ETH`
  quantidade_negociada_ultimas_24h_vol.innerText = `${vol} ETH`
  preco_unitario_ultima_negociacao_last.innerText = `${last} ETH`
  maior_preco_oferta_compra_24h_buy.innerText = `${buy} ETH`
  menor_preco_oferta_venda_24h_sell.innerText = `${sell} ETH`
}


// async function requisicao() {
//   let response = await fetch('https://www.mercadobitcoin.net/api/BTC/day-summary/2013/6/20/')
//   let json = await response.json()
//   console.log(json);
// }
// requisicao()





