import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "@constants/routes.js";
import { IS_DEV } from "@constants/constants.js";
import UiKitPage from "@pages/ui-kit.jsx";
import HomePage from "@pages/index.jsx";
import VotingPage from "@pages/voting.jsx";
import SearchPage from "@pages/search.jsx";
import BreedsPage from "@pages/breeds.jsx";
import BreedPage from "@pages/breed.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index exact path={routes.index} element={<HomePage />} />
        <Route index exact path={routes.voting} element={<VotingPage />} />
        <Route index exact path={routes.search} element={<SearchPage />} />
        <Route index exact path={routes.breeds} element={<BreedsPage />} />
        <Route index exact path={routes.breed.pattern} element={<BreedPage />} />
        {IS_DEV && <Route exact path={routes.uiKit} element={<UiKitPage />} />}

        {/*
        <Route path="*" element={<NotFoundPage />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
