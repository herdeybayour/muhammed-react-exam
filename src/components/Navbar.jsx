import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AppointmentModal from "./AppointmentModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          DIGIT CARE
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/doctors">Doctors</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Button */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg">
          Book Appointment
        </button>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/doctors" onClick={() => setOpen(false)}>Doctors</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

          <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
  Book Appointment
</button>

<AppointmentModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;