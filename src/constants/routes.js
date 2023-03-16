const routes = {
  index: "/",
  voting: "/voting",
  search: {
    path: (id) => `/search?breed_ids=${id}`,
    pattern: "/search"
  },
  likes: "/likes",
  dislikes: "/dislikes",
  favourites: "/favourites",
  breeds: "/breeds",
  gallery: "/gallery",
  uiKit: "/ui-kit"
};

export default routes;
