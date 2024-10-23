import { Link } from "react-router-dom";
import { TwoColumnGrid } from "../grids";
import { useVans } from "../api";
import classNames from "classnames";

export default function Vans() {
  const { vans, isLoading } = useVans();
  if (isLoading || !vans) return <div className="text-center">Loading...</div>;
  return (
    <div className="mt-20 container space-y-6">
      <h1 className="text-4xl font-bold">Explore our van options</h1>
      <div className="flex items-baseline gap-6 [&>a]:transition-colors [&>a]:duration-200">
        <Link
          className="px-4 bg-orange-200 hover:bg-orange-400 active:bg-orange-400 active:text-orange-100 hover:text-orange-100 py-2"
          to="/">
          Simple
        </Link>
        <Link
          className="px-4 bg-orange-200 py-2 hover:bg-neutral-900 hover:text-orange-100 active:bg-neutral-900 active:text-orange-100"
          to="/">
          Luxury
        </Link>
        <Link
          className="px-4 bg-orange-200 py-2 hover:bg-emerald-800 active:bg-emerald-800 active:text-orange-100 hover:text-orange-100"
          to="/">
          Rugged
        </Link>
        <Link className="ml-auto hover:underline" to="/">
          Clear filters
        </Link>
      </div>

      <div className="py-10">
        <TwoColumnGrid>
          {vans?.map((van: any) => (
            <Link to={`/vans/${van.id}`} key={van.id} className="space-y-2">
              <img
                src={van.imageUrl}
                alt={van.name}
                className="w-full aspect-video object-cover rounded-xl"
              />
              <div className="flex flex-wrap justify-between items-start">
                <h2 className="text-xl font-medium">{van.name}</h2>
                <div className="font-medium">
                  <span className="block">${van.price}</span>
                  <span className="block text-xs text-right text-gray-500">/day</span>
                </div>
              </div>
              <span
                className={classNames(
                  "capitalize text-white inline-block px-4 py-1 rounded mt-2",
                  {
                    "bg-[#E17654]": van.type === "simple",
                    "bg-[#161616]": van.type === "luxury",
                    "bg-[#115E59]": van.type === "rugged",
                  }
                )}>
                {van.type}
              </span>
            </Link>
          ))}
        </TwoColumnGrid>
      </div>
    </div>
  );
}
