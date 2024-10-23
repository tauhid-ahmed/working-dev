import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center gap-4 container">
      <Link className="font-bold text-2xl mr-auto hover:underline" to="/">
        #VANLIFE
      </Link>
      <div className="contents">
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline active:underline" : "hover:underline"
          }
          to="/host">
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline active:underline" : "hover:underline"
          }
          to="/about">
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline active:underline" : "hover:underline"
          }
          to="/vans">
          Vans
        </NavLink>
      </div>
    </header>
  );
}
