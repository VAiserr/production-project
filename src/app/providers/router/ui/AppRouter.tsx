import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig";
import { NotFoundPage } from "pages/NotFoundPage/ui/NotFoundPage";

const AppRouter = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route element={element} path={path} key={path} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
