# DEX Optimizer TWA with ChartingView Integration

> **Summary:** TWA interacting with the TON blockchain includes ChartingView integration and allows users swap Jettons 
> in optimized way across DeDust, Ston.fi and Megaton. The main users utility are “special solvers" compete to find the best liquidity source (optimal route) for your trade across mentioned decentralized exchanges. **So the worst price you'll get with us is the best price available elsewhere.**

# Overview

TWA (Telegram Web Application) is a web-based application that provides a user-friendly interface for interacting with the TON blockchain. TON stands for "Telegram Open Network," and it is a decentralized blockchain platform developed by Telegram, a popular messaging app. TON aims to offer fast and secure transactions, smart contracts, and various other features for its users.

The TWA integrates ChartingView, which is a popular charting and technical analysis tool in TON. This integration allows users to access advanced charting capabilities and perform technical analysis on various assets and tokens available on the TON blockchain. With ChartingView, users can analyze historical price data, identify trends, and make informed decisions when trading or swapping tokens.

One of the primary features of TWA is the optimized token swapping functionality. Users can swap Jettons (tokens) across different decentralized finance (DeFi) protocols in a seamless, tailored and efficient manner. Specifically, TWA enables users to perform token swaps across three DeFi platforms: DeDust, Ston.fi, and Megaton.

# TWA Architecture

![image](./docs/dex_optimizer.jpg)

## Smart Solvers (routes optimization)
Route optimization between DEXes, also known as cross-DEX trading or multi-DEX trading, refers to the process of finding the most efficient and cost-effective path to execute a token swap or trade across multiple decentralized exchanges (DEXes). In the TON decentralized finance (DeFi) ecosystem, there are numerous DEXes, each with its liquidity pools and trading pairs. We operate with DeDust, stop.fi and Megaton.

When a trader wants to perform a token swap between two tokens that are not directly available on the same DEX or there are no enough liquidity with afects on price, they have the option to use route optimization to find the best path to execute the trade. This involves breaking down the trade into multiple smaller trades across different DEXes to achieve the desired swap.

The route optimization algorithm considers various factors, including liquidity, trading fees, and slippage, to determine the optimal sequence of trades across DEXes. By splitting the trade and selecting the most liquid and cost-efficient trading pairs at each step, traders can minimize price impact and obtain the best possible price for their token swap.

## ChartingView Integration
[ChartingView](https://chartingview.co/) is built in accordance with [DataFeedAPI specification](https://www.tradingview.com/charting-library-docs/latest/connecting_data/Datafeed-API/)
by TradingView (industrial standard). ChartingView implements the following methods:
* searchSymbols
* getBars
* subscribeBars

So ChartinView allows you to search for a specific ticker (symbol) in the TON DeFi ecosystem, retrieves incl. OHLCV chart data and
subscribe to updates.

![image](./docs/chartingview.jpeg)

### ChartingView local development

To start application:
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

For local development with local DataFeedAPI:
```
REACT_APP_GRAPHQL_API_WS=ws:///127.0.0.1:8088/graphql REACT_APP_GRAPHQL_API_HTTP=http://127.0.0.1:8088/graphql npm start
```

### ChartingView Deployments

ChartingView is deployed on [https://chartingview.redoubt.online/](https://chartingview.redoubt.online/) and also
integrated into [re:doubt MarketFeed](https://beta.redoubt.online/feed/jettons)


### ChartingView Integration

The application could be used as a widget. To integrate it into webpage one need to use iframe. There are two
methods of customization available:
* URL params
* IFrame attributes


# TWA Local Development 

## Prerequesities
* Node.js v16 (other versions may work, needs more testing)
* A TON Connect 2 compatible wallet

## What does this repo contain?
* A react-based TWA-ready app, interacting with TON
* DataFeed API connector
* ChartingView Integration
* Github actions set to deploy app to github pages
* A script to connect a telegram bot to the deployed app

## How to use
1. Create a template from this repo with the "Use this template" button
   1. Choose a name for your repo
   2. Important! mark "Include all branches", otherwise github pages deployment will not work.
   ![image](https://user-images.githubusercontent.com/5641469/191731317-14e742fd-accb-47d4-a794-fad01148a377.png) 

2. Clone this repo and run `yarn`

3. Create a new bot with [botfather](https://t.me/botfather)
   1. Type `/newbot`
   2. Choose a name for your bot, e.g. `My Ton TWA`
   3. Choose a username for your bot, e.g. `my_ton_twa_482765_bot`
   4. Take note of the access token, e.g. `5712441624:AAHmiHvwrrju1F3h29rlVOZLRLnv-B8ZZZ`
   5. Run `yarn configbot` to link your bot to the webapp

# Development
1. Run `npm run dev` and edit the code as needed
2. On push to the `main` branch, the app will be automatically deployed via github actions.


# License
GPL-3.0





