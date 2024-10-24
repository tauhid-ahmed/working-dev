import { Link } from "react-router-dom";
import { getHostVansByVanId } from "../../api";

export default function HostVanDetails() {
  const { van, isLoading } = getHostVansByVanId("1");
  if (isLoading || !van) return <div>Loading...</div>;
  return (
    <div className="space-y-4 mt-10">
      <Link to="/host/vans" className="text-black underline hover:underline inline-block">
        &larr; Back to all vans
      </Link>
      <div className="bg-white p-4 space-y-4">
        <div className="flex gap-4 items-center">
          <img className="size-32 rounded" src={van.imageUrl} alt={van.name} />
          <div className="space-y-1">
            <span className="inline-block">{van.type}</span>
            <h1 className="font-semibold text-2xl">{van.name}</h1>
            <p className="text-gray-700 text-base font-normal">${van.price}/day</p>
          </div>
        </div>
        <div className="">space</div>
      </div>
    </div>
  );
}
