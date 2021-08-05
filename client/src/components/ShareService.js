const baseURL = "http://localhost:5000/api/portfolio/";

export const getShares = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postShare = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

// export const deleteShare = (id) => {
//   return fetch(baseURL + id, {
//     method: "DELETE",
//   }).then((res) => res.json());
// };