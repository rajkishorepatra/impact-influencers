import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div
      id="error-page"
      className="vh-100 d-flex flex-column align-items-center justify-content-center"
    >
      <h1 className="display-3">Oops! {error && error.status}</h1>
      <p className="fs-4">Sorry, an unexpected error has occurred.</p>
      <p>{error && error.message}</p>
      <Link
        to="/"
        className="px-3 py-2 text-primary text-decoration-none rounded-2"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
