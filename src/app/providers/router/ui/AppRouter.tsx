import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "pages/MainPage";
import AboutPage from "pages/AboutPage";
import {routeConfig} from "shared/config/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={"Loading..."}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route element={element} path={path} key={path} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;