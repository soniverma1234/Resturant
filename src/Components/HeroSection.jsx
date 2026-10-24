import {ChefHat, Heart, Leaf, Utensils} from "lucide-react";
import hero from "../assets/HeroPhoto.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-6 pb-16 pt-32 md:px-16"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 font-serif text-5xl italic text-amber-400">
          Good Food
        </p>

        <h1 className="mb-4 text-6xl font-bold text-white md:text-6xl">
          Great Moments
        </h1>

        <p className="mb-6 max-w-md text-sm leading-6 text-white md:text-base">
          Delicious food, cozy ambiance and unforgettable
          experiences for you and your loved ones.
        </p>

        <div className="flex flex-wrap gap-4 max-w-full">
          <button className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-black hover:bg-amber-400">
            Explore Menu →
          </button>

          <button className="rounded-xl border border-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-500 hover:text-black">
            Book a Table
          </button>
        </div>
      </div>


       <div className="mt-30 grid grid-cols-1 gap-6 border-t border-gray-700 py-6 sm:grid-cols-2 lg:grid-cols-4 bg-black/60">

  <div className="flex items-center gap-4 lg:border-r lg:border-gray-700 lg:px-4">
    <Utensils size={32} className="shrink-0 text-amber-400" />
    <div>
      <h2 className="font-semibold text-white">
        Fresh Ingredients
      </h2>
      <p className="mt-1 text-sm text-gray-400">
        Always fresh & high quality
      </p>
    </div>
  </div>

  <div className="flex items-center gap-4 lg:border-r lg:border-gray-700 lg:px-4">
    <ChefHat size={32} className="shrink-0 text-amber-400" />
    <div>
      <h2 className="font-semibold text-white">
        Experienced Chefs
      </h2>
      <p className="mt-1 text-sm text-gray-400">
        Delicious & authentic taste
      </p>
    </div>
  </div>

  <div className="flex items-center gap-4 lg:border-r lg:border-gray-700 lg:px-4">
    <Leaf size={32} className="shrink-0 text-amber-400" />
    <div>
      <h2 className="font-semibold text-white">
        Hygienic Environment
      </h2>
      <p className="mt-1 text-sm text-gray-400">
        Clean & safe for everyone
      </p>
    </div>
  </div>

  <div className="flex items-center gap-4 lg:px-4">
    <Heart size={32} className="shrink-0 text-amber-400" />
    <div>
      <h2 className="font-semibold text-white">
        Cozy Ambiance
      </h2>
      <p className="mt-1 text-sm text-gray-400">
        Perfect for family & friends
      </p>
    </div>
  </div>

</div>
    </section>
  );
};

export default HeroSection;