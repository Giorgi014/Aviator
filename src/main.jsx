import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import App from "./App.jsx";

const Header = React.lazy(() => import("./components/Main/MainHeader/Header.jsx"));
const Home = React.lazy(() => import("./components/Main/Home/Home"));
const AboutUs = React.lazy(() => import("./components/Main/AbouUs/AbouUs.jsx"));
const Concept = React.lazy(() =>
  import("./components/Main/Concept/Concept.jsx")
);
const WhyUs = React.lazy(() => import("./components/Main/WhyUs/WhyUs.jsx"));
const FAQ = React.lazy(() => import("./components/Main/FAQ/Faq.jsx"));
const Aviator = React.lazy(() => import("./components/Game/Aviator.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Home />
            <AboutUs />
            <Concept />
            <WhyUs />
            <FAQ />
          </Suspense>
        ),
      },
      {
        path: "Aviator",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Aviator />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
