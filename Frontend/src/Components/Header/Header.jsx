import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, isAdmin, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="bg-[#1b4883] text-white py-4 px-8 flex items-center justify-between shadow-lg">
      {/* Left side */}
      <div className="text-2xl font-bold hover:scale-110 transition-transform duration-300">
        <Link to="/" className="hover:text-gray-200 transition-colors duration-300">
          Pawfect Match
        </Link>
      </div>

      {/* Center navigation */}
      <nav className="flex space-x-8">
        <Link
          to="/"
          className="text-lg hover:text-gray-200 hover:scale-110 hover:bg-[#1b4c93] p-2 rounded-md transition-transform transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/adopt-us"
          className="text-lg hover:text-gray-200 hover:scale-110 hover:bg-[#1b4c93] p-2 rounded-md transition-transform transition-colors duration-300"
        >
          Adopt Us
        </Link>
        <Link
          to="/shelter"
          className="text-lg hover:text-gray-200 hover:scale-110 hover:bg-[#1b4c93] p-2 rounded-md transition-transform transition-colors duration-300"
        >
          Shelter
        </Link>
        {isAdmin && (
          <Link
            to="/dashboard"
            className="text-lg hover:text-gray-200 hover:scale-110 hover:bg-[#1b4c93] p-2 rounded-md transition-transform transition-colors duration-300"
          >
            Dashboard
          </Link>
        )}
        <Link
          to="/events"
          className="text-lg hover:text-gray-200 hover:scale-110 hover:bg-[#1b4c93] p-2 rounded-md transition-transform transition-colors duration-300"
        >
          Events
        </Link>
      </nav>

      {/* Right side */}
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link
              to="/profile"
              className="bg-[#45b962] text-[white] font-semibold text-lg px-6 py-3 rounded-md hover:bg-[#e4b993] hover:scale-110 hover:text-[#001d4d] transition-transform transition-colors duration-300"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-[#bf3b00] text-white font-semibold text-lg px-6 py-3 rounded-md hover:bg-[#e0562f] hover:scale-110 hover:text-[#ffefe0] transition-transform transition-colors duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/register"
              className="bg-[#45b962] text-[white] font-semibold text-lg px-6 py-3 rounded-md hover:bg-[#e4b993] hover:scale-110 hover:text-[#001d4d] transition-transform transition-colors duration-300"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-[#bf3b00] text-white font-semibold text-lg px-6 py-3 rounded-md hover:bg-[#e0562f] hover:scale-110 hover:text-[#ffefe0] transition-transform transition-colors duration-300"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;