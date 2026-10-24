
import food1 from "../assets/food1.png"
import food2 from "../assets/food2.png"
import food3 from "../assets/food3.png"
import food4 from "../assets/HeroPhoto.png"
import food5 from "../assets/food4.png" 
const Gallery = () => {
  return (
    <section className="bg-orange-50 px-6 py-12 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-amber-500"></span>
            <p className="text-xs font-bold tracking-widest text-gray-700">
              OUR GALLERY
            </p>
            <span className="h-px w-8 bg-amber-500"></span>
          </div>

          <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            A Taste of <span className="text-amber-600">Our World</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
            Take a look at our delicious creations and the moments
            that make dining with us special.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 md:gap-5">

          <div className="group overflow-hidden rounded-xl">
            <img
              src={food3}
              alt="Delicious restaurant dish"
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 md:h-64"
            />

          </div>


          <div className="group overflow-hidden rounded-xl">
            <img
              src={food1}
              alt="Restaurant special dish"
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 md:h-64"
            />
          </div>

          <div className="group overflow-hidden rounded-xl">
            <img
              src={food2}
              alt="Tasty meal"
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 md:h-64"
            />
          </div>

          <div className="group overflow-hidden rounded-xl">
            <img
              src={food4}
              alt="Restaurant dining experience"
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 md:h-64"
            />
          </div>

          <div className="group overflow-hidden rounded-xl">
            <img
              src={food5}
              alt="Chef's special food"
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 md:h-64"
            />
          </div>

        </div>

      </div>
    </section>

  );
};

export default Gallery;