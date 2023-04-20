export const baseURL = process.env.REACT_APP_API_URL;

export const subId = process.env.REACT_APP_API_SUB_ID || "";

export const apiUrls = {
  votes: `/votes`,
  deleteVote: (id) => `/votes/${id}`,
  favourites: `/favourites`,
  deleteFavourite: (id) => `/favourites/${id}`,
  upload: `/images/upload`,
  getUploads: "/images/",
  deleteUpload: (id) => `/images/${id}`,
  searchImages: "/images/search",
  getImageById: (id) => `/images/${id}`,
  breeds: "/breeds",
  getBreedByid: (id) => `/breeds/${id}`,
  getCatsByBreedId: (id) => `/images/search?&breed_ids=${id}`
};
