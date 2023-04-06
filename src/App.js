// import logo from './logo.svg';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Root from "./pages/root";
import ErrorPage from "./pages/error-page";
import Login from "./pages/login";
import Register from "./pages/register";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register/>} />
    </>
  )
);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
