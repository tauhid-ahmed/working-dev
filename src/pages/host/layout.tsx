import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <div className="py-10 container">
      <ul className="flex gap-4">
        <li>
          <Link className="active:underline hover: underline" to="/host">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="active:underline hover: underline" to="/host/income">
            Income
          </Link>
        </li>
        <li>
          <Link className="active:underline hover: underline" to="/host/vans">
            Vans
          </Link>
        </li>
        <li>
          <Link className="active:underline hover: underline" to="/host/reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
