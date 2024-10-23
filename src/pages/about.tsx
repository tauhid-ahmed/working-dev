import { Link } from "react-router-dom";
import aboutImage from "../assets/about.png";

export default function AboutPage() {
  return (
    <div className="pb-14">
      <img src={aboutImage} alt="about" className="h-[40vh] w-full object-cover" />
      <div className="max-w-2xl mx-auto mt-14 px-4 space-y-6">
        <h1 className="text-4xl font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our
          vans are recertified before each trip to ensure your travel plans can go off
          without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring
          the world on 4 wheels.
        </p>
        <div className="bg-orange-300 p-12 space-y-8">
          <h2 className="text-2xl font-semibold">
            Your destination is waiting. <br /> Your van is ready.
          </h2>
          <Link className="bg-neutral-900 text-white rounded-md px-4 py-2" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}
