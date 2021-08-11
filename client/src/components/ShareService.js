const baseURL1 = "http://localhost:5000/api/portfolio/";
const baseURL2 = "http://localhost:5000/api/tickers";

export const getShares = () => {
  return fetch(baseURL1).then((res) => res.json());
};

export const postShare = (payload) => {
  return fetch(baseURL1, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const getTickers = (query) => {
  console.log(baseURL2 + `?search_term=${query}`);
  return fetch(baseURL2 + `?search_term=${query}`)
  .then((res) => res.json()) 
};
