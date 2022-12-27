import { LoginPage } from "./pages/index";
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
