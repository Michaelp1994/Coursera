import React from "react";
import ReactDOM from "react-dom/client";
import { registerLocale } from "react-datepicker";
import enAU from "date-fns/locale/en-AU";
import { router, RouterProvider } from "./router";

import "react-datepicker/dist/react-datepicker.css";
import "./styles/global.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

registerLocale("en-AU", enAU);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
