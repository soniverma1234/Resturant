import {  Users, Star, Coffee } from "lucide-react";
import Restaurant from "../assets/Restaurant.png";

const AboutUs = () => {
  return (
    <section className="grid grid-cols-1 bg-gray-950 text-white md:grid-cols-2">

      <div className="h-72 md:h-full md:min-h-[420px]">
        <img
          src={Restaurant}
          alt="Our Restaurant Interior"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center px-6 py-10 md:px-10 lg:px-14">

        <div className="mb-3 flex items-center gap-3">
          <p className="text-xs font-bold tracking-[0.2em] text-amber-500">
            ABOUT US
          </p>
          <span className="h-px w-8 bg-amber-500"></span>
        </div>

        <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">
          A Place Where
          <br />
          Food Brings{" "}
          <span className="text-amber-500">People Together</span>
        </h2>

        <p className="mt-4 text-sm leading-6 text-gray-300 md:text-base">
          We are passionate about serving delicious food made from fresh
          ingredients. Our restaurant is a perfect place to enjoy great
          food with family and friends in a warm and cozy atmosphere.
        </p>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">

          <div className="flex items-center gap-3">
            <Coffee size={30} className="shrink-0 text-amber-500" />
            <div>
              <h3 className="text-sm font-semibold">Authentic Taste</h3>
              <p className="mt-1 text-xs text-gray-400">
                Traditional & modern recipes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users size={30} className="shrink-0 text-amber-500" />
            <div>
              <h3 className="text-sm font-semibold">Family Friendly</h3>
              <p className="mt-1 text-xs text-gray-400">
                Perfect for all ages
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Star size={30} className="shrink-0 text-amber-500" />
            <div>
              <h3 className="text-sm font-semibold">Memorable Experience</h3>
              <p className="mt-1 text-xs text-gray-400">
                More than just food
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutUs;