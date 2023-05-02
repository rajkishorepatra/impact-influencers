import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Root from "./pages/root";
import ErrorPage from "./pages/error-page";
import Login from "./pages/user-management/login";
import Register from "./pages/user-management/register";
import { AuthContextProvider } from "./context/AuthContext";
import InfluencerProfile from "./pages/user-management/influencer";
import { RequireAuth } from "./pages/user-management/protected";
import PageNotFound from "./pages/page-not-found";
import CaseStudies from "./pages/case-studies-page";
import Campaigns from "./pages/campaigns-page";
import { useLayoutEffect } from "react";

function App() {
  return (
    <>
      <AuthContextProvider>
        <div className="App">
          <BrowserRouter>
            <ScrollToTopWrapper>
              <Routes>
                <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
                  <Route index element={<Home />} />
                  <Route path="case-studies" element={<CaseStudies />} />
                  <Route path="campaigns" element={<Campaigns />} />
                  <Route
                    path="influencer"
                    element={
                      <RequireAuth>
                        <InfluencerProfile />
                      </RequireAuth>
                    }
                  />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </ScrollToTopWrapper>
          </BrowserRouter>
        </div>
      </AuthContextProvider>
    </>
  );
}

export default App;

const ScrollToTopWrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
