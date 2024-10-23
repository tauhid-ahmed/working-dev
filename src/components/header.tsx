import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center gap-4 container">
      <Link className="font-bold text-2xl mr-auto" to="/">
        #VANLIFE
      </Link>
      <div className="contents">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </header>
  );
}