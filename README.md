# DataPulse

**A retail analytics platform that turns raw sales data into decisions.**
Built for the **CEWIT 2024** hackathon on the classic [Superstore](https://www.kaggle.com/datasets/vivek468/superstore-dataset-final) dataset (~10k orders), DataPulse pairs a machine-learning backend with an interactive dashboard to answer four questions a retailer actually cares about:

- **Who are my customers?** — RFM segmentation groups them into behavioural tiers.
- **What will I sell next?** — time-series forecasting projects future sales.
- **What else might a shopper want?** — product-similarity recommendations.
- **Can I just ask?** — a built-in conversational assistant.

This is a **monorepo** containing both halves of the project.

```
DataPulse/
├── backend/    ← Flask + ML API (scikit-learn, Prophet, GloVe, Gemma)
└── frontend/   ← React dashboard (Plotly charts, light/dark mode)
```

---

## How it fits together

```
   ┌──────────────────────────┐        HTTP / JSON        ┌──────────────────────────┐
   │  frontend/  (React)       │  ───────────────────────▶ │  backend/  (Flask)        │
   │  · dashboard & routing    │   /create_rfm             │  · ML services            │
   │  · renders Plotly figures │   /predict_sales          │  · Redis read-through     │
   │  · AI chat popup          │   /similar_products       │    cache                  │
   │                           │ ◀───────────────────────  │  · Superstore dataset     │
   └──────────────────────────┘   Plotly figure JSON       └──────────────────────────┘
```

The backend does the computation and returns [Plotly](https://plotly.com/) figure specs; the frontend renders them as interactive charts. Every expensive result is cached in Redis for a week.

---

## Features

| Feature | Frontend page | Backend endpoint | Under the hood |
|---|---|---|---|
| **Customer segmentation** | `/` (RFM analysis) | `POST /create_rfm` | KMeans with automatic *k* (elbow method) |
| **Sales forecasting** | `/sales_forcast` | `POST /predict_sales` | Facebook Prophet |
| **Product recommendations** | `/similar_product_prediction` | `POST /similar_products` | GloVe embeddings + cosine similarity → network graph |
| **Conversational assistant** | Chat popup | `POST /generate_text` | Google Gemma-2b (4-bit quantized) |

---

## Quick start

You'll run the two halves in separate terminals. Full details live in each folder's README.

**1. Backend** ([backend/README.md](backend/README.md))

```bash
cd backend
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env          # add your Redis credentials
python run.py                 # http://localhost:5000
```

**2. Frontend** ([frontend/README.md](frontend/README.md))

```bash
cd frontend
npm install
npm start                     # http://localhost:3000
```

The frontend defaults to a backend at `http://localhost:5000`; override it with
`REACT_APP_API_URL` (see `frontend/.env.example`).

---

## Tech stack

**Backend** — Flask · scikit-learn · Prophet · gensim (GloVe) · Transformers + bitsandbytes (Gemma-2b) · Redis · Plotly
**Frontend** — React 18 · React Router · React-Bootstrap · Plotly.js · d3

---

## About

DataPulse was built by a team at the **CEWIT 2024** hackathon. The code here is the original
submission, tidied up for readability and documentation. Each half has its own README with
architecture notes, the data pipeline, and API examples.

**My contributions:** I designed and built the **frontend** — the entire DataPulse dashboard
as a React single-page app. This included:

- the multi-page layout and client-side routing (React Router) across the RFM, sales-forecast, and product-recommendation views;
- integrating the backend's analytics responses into interactive **Plotly** charts rendered dynamically on the page;
- data-driven UI controls, including cascading category → sub-category → product selectors that let a user drill into the recommendation engine;
- a conversational **AI chat assistant** with live message state; and
- UX polish such as a light/dark mode toggle and responsive styling.

## License

Released under the [MIT License](LICENSE).
