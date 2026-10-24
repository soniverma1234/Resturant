import { User, Phone, CalendarDays, Clock, Users } from "lucide-react";

const Reservation = () => {
  return (
    <section className="bg-orange-50 px-6 py-10 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2">

        <div>
          <p className="mb-2 text-xs font-bold tracking-widest text-gray-700">
            RESERVATION
          </p>

          <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Book Your Table
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-600 md:text-base">
            Plan your visit and enjoy a wonderful dining experience
            with your loved ones.
          </p>
        </div>

        <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">

          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-3">
            <User size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>

          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-3">
            <Phone size={18} className="text-gray-500" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>

          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-3">
            <CalendarDays size={18} className="text-gray-500" />
            <input
              type="date"
              className="w-full bg-transparent text-sm text-gray-600 outline-none"
            />
          </div>

          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-3">
            <Clock size={18} className="text-gray-500" />
            <input
              type="time"
              className="w-full bg-transparent text-sm text-gray-600 outline-none"
            />
          </div>

          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-3">
            <Users size={18} className="text-gray-500" />
            <select
              defaultValue=""
              className="w-full bg-transparent text-sm text-gray-600 outline-none"
            >
              <option value="" disabled>
                Number of People
              </option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6+ People</option>
            </select>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-md bg-amber-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-amber-400"
          >
            Book Now →
          </button>

        </form>
      </div>
    </section>
  );
};

export default Reservation;