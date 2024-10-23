import { Link } from "react-router-dom";
import { TwoColumnGrid } from "../grids";

export default function Vans() {
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

      <TwoColumnGrid>
        <div className="h-32 border"></div>
        <div className="h-32 border"></div>
        <div className="h-32 border"></div>
        <div className="h-32 border"></div>
        <div className="h-32 border"></div>
      </TwoColumnGrid>
    </div>
  );
}
