import heroImage from "../assets/hero-image.png";

export default function Homepage() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${heroImage})`,
      }}
      className="h-[calc(100vh-128px)] flex items-center justify-center">
      <div className="max-w-2xl text-white px-4 space-y-8">
        <h1 className="font-bold text-5xl">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="font-semibold">
          Add adventure to your life by joining the #vanlife movement. Rent the perfect
          van to make your perfect road trip.
        </p>
        <button className="bg-orange-400 rounded w-full text-white p-3 cursor-pointer font-bold hover:bg-orange-500">
          Find your van
        </button>
      </div>
    </div>
  );
}
