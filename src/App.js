// import logo from './logo.svg';
// import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import DashboardPage from "./pages/dashboard";
import DetailPage from "./pages/detail";
import CheckoutPage from "./pages/checkout";
import InstruksiPage from "./pages/instruksi";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "instruksi",
        element: <InstruksiPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
