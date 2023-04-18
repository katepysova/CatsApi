export const baseURL = process.env.REACT_APP_API_URL;

export const apiUrls = {
  votes: "/votes",
  favourites: "/favourites",
  deleteFavourite: (id) => `/favourites/${id}`,
  searchImages: "/images/search",
  getImageById: (id) => `/images/${id}`,
  breeds: "/breeds",
  getBreedByid: (id) => `/breeds/${id}`,
  getCatsByBreedId: (id) => `/images/search?&breed_ids=${id}`
};
