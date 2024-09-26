// React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom"

// AWS Amplify
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

// Other Inclusions
import "./index.css";


Amplify.configure(outputs);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
