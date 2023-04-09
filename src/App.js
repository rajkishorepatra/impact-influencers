// import logo from './logo.svg';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Root from "./pages/root";
import ErrorPage from "./pages/error-page";
import Login from "./pages/user-management/login";
import Register from "./pages/user-management/register";
import { AuthContextProvider } from "./context/AuthContext";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ]
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />
    }
  ]
);

function App() {
  return (
    <AuthContextProvider>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </AuthContextProvider>
  );
}

export default App;
