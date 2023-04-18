import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "@constants/routes.js";
import HomePage from "@pages/index.jsx";
import VotingPage from "@pages/voting.jsx";
import BreedsPage from "@pages/breeds.jsx";
import GalleryPage from "@pages/gallery.jsx";
import BreedPage from "@pages/breed.jsx";
import LikesPage from "@pages/likes.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index exact path={routes.index} element={<HomePage />} />
        <Route index exact path={routes.voting} element={<VotingPage />} />
        <Route index exact path={routes.breeds} element={<BreedsPage />} />
        <Route index exact path={routes.gallery} element={<GalleryPage />} />
        <Route index exact path={routes.breed.pattern} element={<BreedPage />} />
        <Route index exact path={routes.likes} element={<LikesPage />} />

        {/*
        <Route path="*" element={<NotFoundPage />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
