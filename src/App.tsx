import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import MainPage from "./pages/MainPage/";
import AboutPage from "./pages/AboutPage";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";
import {Theme} from "./theme/ThemeContext";


function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {"hovered": true}, [theme])}>
            <div>
                <button onClick={toggleTheme}>Theme</button>
                <Link to={"/"}>Главная</Link>
                <Link to={"/about"}>О Нас</Link>
            </div>

                <Suspense fallback={"Loading..."}>
                    <Routes>
                        <Route path={'/'} element={<MainPage />} />
                        <Route path={'/about'} element={<AboutPage />} />
                    </Routes>
                </Suspense>
        </div>
    );
}

export default App;