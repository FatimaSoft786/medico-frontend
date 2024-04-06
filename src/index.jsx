import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { Provider } from "react-redux";
import {store} from "./app/store"
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Provider store={store}>
      <App />
    </Provider>
);

