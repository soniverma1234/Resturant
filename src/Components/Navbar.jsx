import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-20 flex w-full items-center justify-between px-6 py-4 md:px-16">
      
      <img
        src={logo}
        alt="FlavorHub"
        className="h-10 w-auto object-contain"
      />

      <div className="hidden items-center gap-8 text-sm text-white md:flex">
         <a href="#" className="hover:text-amber-400">Home</a>
        <a href="#" className="hover:text-amber-400">Menu</a>
        <a href="#" className="hover:text-amber-400">About</a>
        <a href="#" className="hover:text-amber-400">Gallery</a>
        <a href="#" className="hover:text-amber-400">Contact</a>
      </div>

      <button className="rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-black hover:bg-amber-400">
        Reserve a Table
      </button>

    </nav>
  );
};

export default Navbar;