import { LoginPage } from "./pages/index.jsx";
export const routerConfig = [
  {
    path: "",
    element: <div>Root index</div>,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
];
