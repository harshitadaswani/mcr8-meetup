import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MeetupProvider } from "./contexts/Meetup.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MeetupProvider>
        <App />
      </MeetupProvider>
    </BrowserRouter>
  </React.StrictMode>
);
