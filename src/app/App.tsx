import React from 'react';
import {Link} from 'react-router-dom'
import 'app/styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


function App() {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {"hovered": true}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
}

export default App;