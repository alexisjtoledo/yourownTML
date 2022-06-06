import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./components/App";
import "./styles/GlobalStyles.sass";

import { fetchShows } from "./app/action-creators/index";

const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(fetchShows());

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
