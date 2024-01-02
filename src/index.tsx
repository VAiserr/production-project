import test from "./test";
import {render} from "react-dom";
import {TestComponent} from "./components/testComponent";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

// console.log(test(6));

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)