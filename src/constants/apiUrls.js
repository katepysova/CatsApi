export const baseURL = process.env.REACT_APP_API_URL;

export const apiUrls = {
  votes: "/votes",
  searchImages: "/images/search",
  breeds: "/breeds",
  getBreedByid: (id) => `/breeds/${id}`,
  getCatsByBreedId: (id) => `/images/search?&breed_ids=${id}`
};
