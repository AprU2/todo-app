import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLogo from "./components/global-components/header-logo-component/header-logo";
import HomePage from "./pages/home-page/home-page";
import SignInPage from "./pages/auth-pages/sign-in-page/sign-in-page";
import SignUpPage from "./pages/auth-pages/sign-up-page/sign-up-page";
import {
  checkAuthLoader,
  checkTokenLoader,
  logout,
} from "./helpers/auth-helper";
import TodoPage from "./pages/todo-page/todo-page";
import "./global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLogo />,
    children: [
      {
        path: "/",
        loader: checkAuthLoader,
        element: <HomePage />,
      },
      {
        path: "/sign-in",
        loader: logout,
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        loader: logout,
        element: <SignUpPage />,
      },
      {
        path: "/todos",
        loader: checkTokenLoader,
        element: <TodoPage />,
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
