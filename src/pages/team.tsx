import { Link, useParams, useSearchParams } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import useTeamsArticles from "../hooks/useTeamsArticles";
import useTeam from "../hooks/useTeam";
import TeamLogo from "../components/icons";

const useTeamPageData = (teamId: string) => {
  const { response: teamNames, loading: loadingTeamNames } = useTeamNames();

  const { response: articles, loading: loadingArticles } = useTeamsArticles(teamId);

  const { response: team, loading: loadingTeam } = useTeam(teamId);

  return {
    teamNames,
    articles,
    team,
    loading: loadingTeamNames || loadingArticles || loadingTeam,
  };
};

export default function TeamPage() {
  const { teamId } = useParams();

  const { teamNames, articles, team, loading }: any = useTeamPageData(teamId as string);

  if (loading) return null;
  console.log({ team });

  return (
    <div className="space-x-1 text-center py-20">
      <TeamLogo
        className="size-32 md:size-48 inline-block"
        id={teamId as keyof typeof TeamLogo}
      />
      <h1 className="mt-10 text-4xl">{team?.name}</h1>
      <h2 className="mt-4 text-yellow-400">
        <Link to={{ pathname: "/players", search: `?teamId=${teamId}` }}>
          View Rooster
        </Link>
      </h2>

      <h2 className="mt-4 text-yellow-400">Championships</h2>
      <ul className="inline-flex gap-4 ">
        {team.championships?.map((ship: any) => (
          <li key={ship} className="py-2">
            {ship}
          </li>
        ))}
      </ul>
      <ul className="flex justify-between gap-4 mt-8">
        <li>Est: {team.established}</li>
        <li>Manager: {team.manager}</li>
        <li>Coach: {team.coach}</li>
        <li>
          Recoard: {team.wins} - {team.losses}
        </li>
      </ul>
      <div className="mt-8 inline-flex flex-col">
        <ul className="text-left space-y-8">
          {articles?.map((article: any) => (
            <li key={article.id}>
              <Link className="text-yellow-400" to={`/articles/${article.id}`}>
                {article.title}
              </Link>
              <p>{new Date(article.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
