import {
  BrowserRouter,
  Route, Routes
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Root from "./pages/root";
import ErrorPage from "./pages/error-page";
import Login from "./pages/user-management/login";
import Register from "./pages/user-management/register";
import { AuthContextProvider } from "./context/AuthContext";
import InfluencerProfile from "./pages/user-management/influencer";
import { RequireAuth } from "./pages/user-management/protected";
import Organization from "./pages/user-management/organization";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
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
            <Route
              path="org"
              element={
                <RequireAuth>
                  <Organization />
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
