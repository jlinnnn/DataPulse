# DataPulse — Frontend

The React UI for **DataPulse**, a retail analytics dashboard. It renders the interactive
[Plotly](https://plotly.com/javascript/) charts produced by the [DataPulse backend](../backend)
and provides a small conversational assistant.

Built with Create React App.

## Pages

| Route | Purpose |
|---|---|
| `/` | **RFM analysis** — pick a dimension and view the customer-segment clusters, plus a "Chat with Us" AI assistant popup. |
| `/sales_forcast` | **Sales forecast** — Prophet-based projection of future sales. |
| `/similar_product_prediction` | **Similar products** — network graph of related products. |
| `/aboutUs` | About the project / team. |

Includes a light/dark mode toggle.

## Getting started

```bash
# from the repo root
cd frontend

npm install

# optional: point the app at a non-default backend
cp .env.example .env      # then edit REACT_APP_API_URL

npm start                 # http://localhost:3000
```

The app talks to the backend at `REACT_APP_API_URL` (default `http://localhost:5000`),
resolved once in [`src/config.js`](src/config.js). Make sure the
[backend](../backend) is running first.

## Scripts

- `npm start` — run the dev server
- `npm run build` — production build into `build/`
- `npm test` — run the test runner

## Tech stack

React 18 · React Router · React-Bootstrap · Plotly.js · d3
