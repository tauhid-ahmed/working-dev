import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex gap-4 py-4 text-yellow-400">
      <Link className="mr-auto" to="/">
        Home
      </Link>
      <div className="contents">
        <Link to="/teams">Teams</Link>
        <Link to="/players">Players</Link>
      </div>
    </header>
  );
}
