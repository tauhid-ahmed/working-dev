import useFetch from "../hooks/useFetch";
import TeamLogo from "../components/icons";
import { Link } from "react-router-dom";

export default function Home() {
  const { response, loading } = useFetch("/teams", "GET");
  if (loading) return null;
  const teamNames = response as unknown as string[];

  return (
    <div className="py-20 text-center">
      <h1 className="text-7xl font-bold leading-tight">
        Hash History <br /> Basketball League
      </h1>
      <h2 className="mt-10 text-2xl">Select a team</h2>
      <ul className="inline-flex mt-10 gap-2 items-center">
        {teamNames.map((team) => (
          <li key={team}>
            <Link to={`/${team}`}>
              <TeamLogo id={team as keyof typeof TeamLogo} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
