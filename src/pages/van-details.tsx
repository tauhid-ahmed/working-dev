import { Link, useParams } from "react-router-dom";
import { getOneVan } from "../api";
import classNames from "classnames";

export default function VanDetails() {
  const { id } = useParams();
  const { van, isLoading } = getOneVan(id as string);

  if (isLoading || !van) return <div>Loading...</div>;
  return (
    <div className="container">
      <Link to="/vans" className="text-black underline hover:underline">
        &larr; Back to all vans
      </Link>
      <img
        className="w-full h-[60vh] object-cover mt-6"
        src={van.imageUrl}
        alt={van.name}
      />
      <div className="space-y-4 py-10 max-w-2xl mx-auto">
        <span
          className={classNames("inline-block px-6 py-2 rounded text-white", {
            "bg-orange-400": van.type === "simple",
            "bg-emerald-700": van.type === "luxury",
            "bg-neutral-900": van.type === "rugged",
          })}>
          {van.type}
        </span>
        <h1 className="font-semibold text-2xl">{van.name}</h1>
        <p>{van.description}</p>
        <Link to="/" className="bg-orange-400 text-white p-2 block text-center rounded">
          Rent this van
        </Link>
      </div>
    </div>
  );
}
