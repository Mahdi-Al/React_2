import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppPodex from "./App-podex";
// import App from "./App.jsx";

// import PutPlanets from "./exrecise 1/maping-array-of-objects-to-li/app.jsx";
// import CustomerInformation from "./exrecise 1/rendering-from-objects/app.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <PutPlanets /> */}
    {/* <CustomerInformation /> */}
    <AppPodex />
  </StrictMode>
);
