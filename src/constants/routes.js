const routes = {
  index: "/",
  voting: "/voting",
  likes: "/likes",
  dislikes: "/dislikes",
  favourites: "/favourites",
  breeds: "/breeds",
  breed: {
    url: (id) => `/breeds/${id}`,
    pattern: "/breeds/:id"
  },
  gallery: "/gallery",
  uiKit: "/ui-kit"
};

export default routes;
