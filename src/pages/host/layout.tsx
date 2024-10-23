import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <div className="py-10 container">
      <ul className="flex gap-4">
        <li>
          <NavLink
            end
            className={({ isActive }) =>
              isActive
                ? "underline active:underline text-neutral-950"
                : "hover:underline text-neutral-950"
            }
            to="/host">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline active:underline text-neutral-950"
                : "hover:underline text-neutral-950"
            }
            to="/host/income">
            Income
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline active:underline text-neutral-950"
                : "hover:underline text-neutral-950"
            }
            to="/host/vans">
            Vans
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline active:underline text-neutral-950"
                : "hover:underline text-neutral-950"
            }
            to="/host/reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
