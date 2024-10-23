import { Link } from "react-router-dom";

import { getHostVans } from "../../api";

export default function HostVans() {
  const { vans, isLoading } = getHostVans();

  if (isLoading || !vans) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-10">
      <h1 className="font-bold text-4xl">Your listed vans</h1>
      <ul className="space-y-4">
        {vans?.map((van: any) => (
          <li key={van.id} className="bg-white p-4 rouned flex items-center gap-4">
            <img className="size-16 rounded" src={van.imageUrl} alt={van.name} />
            <Link className="font-semibold text-lg" to={`/host/vans/${van.id}`}>
              {van.name}
              <p className="text-gray-700 text-base font-normal">${van.price}/day</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
