export const baseURL = process.env.REACT_APP_API_URL;

export const apiUrls = {
  votes: "/votes",
  searchImages: "/images/search",
  breeds: "/breeds",
  getBreedById: (id) => `/images/search?breeds_ids=${id}`
};
