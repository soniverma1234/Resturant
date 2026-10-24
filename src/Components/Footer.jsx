import { MapPin, Phone, Mail, Clock, Utensils } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 px-6 pt-12 text-gray-300 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <div className="mb-4 flex items-center gap-2">
            <Utensils size={28} className="text-amber-500" />

            <h2 className="font-serif text-2xl font-bold text-white">
              Food<span className="text-amber-500">Haven</span>
            </h2>
          </div>

          <p className="text-sm leading-6 text-gray-400">
            Serving delicious food made with fresh ingredients.
            Join us for great flavors, warm hospitality, and
            memorable moments.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-gray-800 px-3 py-2 text-sm transition hover:bg-amber-500 hover:text-black"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-gray-800 px-3 py-2 text-sm transition hover:bg-amber-500 hover:text-black"
            >
              Instagram
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-gray-800 px-3 py-2 text-sm transition hover:bg-amber-500 hover:text-black"
            >
              Twitter
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#home" className="transition hover:text-amber-500">
                Home
              </a>
            </li>

            <li>
              <a href="#menu" className="transition hover:text-amber-500">
                Our Menu
              </a>
            </li>

            <li>
              <a href="#about" className="transition hover:text-amber-500">
                About Us
              </a>
            </li>

            <li>
              <a
                href="#reservation"
                className="transition hover:text-amber-500"
              >
                Reservation
              </a>
            </li>

            <li>
              <a href="#gallery" className="transition hover:text-amber-500">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">
            Opening Hours
          </h3>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Clock size={17} className="shrink-0 text-amber-500" />
              Monday – Friday
            </p>

            <p className="pl-6 text-gray-400">
              10:00 AM – 10:00 PM
            </p>

            <p className="flex items-center gap-2">
              <Clock size={17} className="shrink-0 text-amber-500" />
              Saturday – Sunday
            </p>

            <p className="pl-6 text-gray-400">
              11:00 AM – 11:00 PM
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-amber-500" />
              <span>123 Food Street, Lucknow, India</span>
            </p>

            <p className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-amber-500" />
              <a
                href="tel:+911234567890"
                className=" hover:text-amber-500"
              >
                +91 12345 67890
              </a>
            </p>

            <p className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-amber-500" />
              <a
                href="mailto:hello@foodhaven.com"
                className="break-all transition hover:text-amber-500"
              >
                soni26207@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-800 py-5 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-amber-500">FoodHaven</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;