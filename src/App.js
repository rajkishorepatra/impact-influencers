import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
  Route,
  Navigate,
  useLocation,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Root from "./pages/root";
import ErrorPage from "./pages/error-page";
import Login from "./pages/user-management/login";
import Register from "./pages/user-management/register";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import InfluencerProfile from "./pages/user-management/influencer";
import { PrivateRoute, RequireAuth } from "./pages/user-management/protected";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route
        path="influencer"
        element={
          <RequireAuth>
            <InfluencerProfile />
          </RequireAuth>
        }
      />
    </>
  )
);

function App() {
  return (
    <AuthContextProvider>
      <div className="App">

        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="influencer"
            element={
              <RequireAuth>
                <InfluencerProfile />
              </RequireAuth>
            }
          />
        </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
