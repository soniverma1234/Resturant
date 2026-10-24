import { ShoppingBag } from "lucide-react";

const PopularDishes = () => {
  return (
    <section className="bg-orange-50 px-6 py-10 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="block h-px w-8 bg-amber-500"></span>

            <p className="text-xs font-bold tracking-[0.2em] text-gray-700">
              OUR MENU
            </p>

            <span className="block h-px w-8 bg-amber-500"></span>
          </div>

          <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Our <span className="text-amber-600">Popular</span> Dishes
          </h2>

          <p className="mt-3 text-sm text-gray-600 md:text-base">
            Taste our most loved dishes, made with fresh ingredients and
            authentic flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
              alt="Classic Burger"
              className="h-40 w-full object-cover"
            />

            <div className="p-3">
              <h3 className="font-serif text-lg font-bold text-gray-900">
                Classic Burger
              </h3>

              <p className="mt-1 min-h-10 text-sm leading-5 text-gray-600">
                Juicy patty with fresh veggies and special sauce.
              </p>

              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="text-lg font-bold text-amber-700">₹249</span>

                <button className="flex items-center gap-1 rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-black transition hover:bg-amber-400">
                  <ShoppingBag size={15} />
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80"
              alt="Margherita Pizza"
              className="h-40 w-full object-cover"
            />

            <div className="p-3">
              <h3 className="font-serif text-lg font-bold text-gray-900">
                Margherita Pizza
              </h3>

              <p className="mt-1 min-h-10 text-sm leading-5 text-gray-600">
                Loaded with fresh tomatoes, mozzarella and basil.
              </p>

              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="text-lg font-bold text-amber-700">₹399</span>

                <button className="flex items-center gap-1 rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-black transition hover:bg-amber-400">
                  <ShoppingBag size={15} />
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80"
              alt="Pasta Alfredo"
              className="h-40 w-full object-cover"
            />

            <div className="p-3">
              <h3 className="font-serif text-lg font-bold text-gray-900">
                Pasta Alfredo
              </h3>

              <p className="mt-1 min-h-10 text-sm leading-5 text-gray-600">
                Creamy pasta with rich cheese and herbs.
              </p>

              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="text-lg font-bold text-amber-700">₹299</span>

                <button className="flex items-center gap-1 rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-black transition hover:bg-amber-400">
                  <ShoppingBag size={15} />
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
              alt="Choco Lava Cake"
              className="h-40 w-full object-cover"
            />

            <div className="p-3">
              <h3 className="font-serif text-lg font-bold text-gray-900">
                Choco Lava Cake
              </h3>

              <p className="mt-1 min-h-10 text-sm leading-5 text-gray-600">
                Warm chocolate cake with a molten center.
              </p>

              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="text-lg font-bold text-amber-700">₹199</span>

                <button className="flex items-center gap-1 rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-black transition hover:bg-amber-400">
                  <ShoppingBag size={15} />
                  Order Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PopularDishes;