// const url = "https://api.themoviedb.org/3/authentication";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2MzOGEwYzExZjlkNTk2YjVhZTIzM2Y2ZTU2YzM1ZSIsIm5iZiI6MTc0MjQ3NDA3Ni4yMTksInN1YiI6IjY3ZGMwYjVjNWVmNDYzOWViYWU3YTRhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JAlAqmhVTq8vWV9Nq2U8lhegFYmWdbPB9fxgfaOaOA0",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));

export const TMDB_CONFIG = {
  API_KEY: process.env.EXPO_READ_ACCESS_TOKEN,
  BASE_URL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_READ_ACCESS_TOKEN}`,
  },
  LANGUAGE: "en-US",
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500",
  BACKDROP_BASE_URL: "https://image.tmdb.org/t/p/w1280",
};

export const fetchPopularmovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
  const options = {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  };
  const response = await fetch(endpoint, options);

  if (!response.ok) {
    throw new Error("Failed to fetch movies" + response.statusText);
  }
  const data = await response.json();
  return data;
};
