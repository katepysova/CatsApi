import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "@constants/routes.js";
import { IS_DEV } from "@constants/constants.js";
import UiKitPage from "@pages/ui-kit.jsx";
import HomePage from "@pages/index.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index exact path={routes.index} element={<HomePage />} />

        {IS_DEV && <Route exact path={routes.uiKit} element={<UiKitPage />} />}

        {/*
        <Route path="*" element={<NotFoundPage />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
