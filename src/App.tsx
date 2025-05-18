import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLogo from "./components/global-components/header-logo-component/header-logo";
import HomePage from "./pages/home-page/home-page";
import "./global.scss";
import SignInPage from "./pages/auth-pages/sign-in-page/sign-in-page";
import SignUpPage from "./pages/auth-pages/sign-up-page/sign-up-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLogo />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    function setVhVariable() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    setVhVariable();
    window.addEventListener("resize", setVhVariable);

    return () => window.removeEventListener("resize", setVhVariable);
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
