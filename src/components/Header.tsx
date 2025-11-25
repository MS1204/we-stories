import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`text-white shadow-md sticky top-0 z-10 whole-bg ${
        isScrolled ? "backdrop-blur-sm bg-white" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-2 pt-5 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide text-amber-400"> We Stories</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;