import React from 'react';
import { NavLink } from 'react-router-dom';
import { Train } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-orange-950 text-white py-4 fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-3">
            <Train className="w-8 h-8 text-orange-500" />
            <span className="font-bold text-2xl">Women in Rail UK</span>
          </NavLink>
          <div className="flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `hover:text-orange-400 transition-colors ${isActive ? 'text-orange-400' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about-us" 
              className={({ isActive }) => 
                `hover:text-orange-400 transition-colors ${isActive ? 'text-orange-400' : ''}`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/course-details" 
              className={({ isActive }) => 
                `hover:text-orange-400 transition-colors ${isActive ? 'text-orange-400' : ''}`
              }
            >
              Course Details
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `hover:text-orange-400 transition-colors ${isActive ? 'text-orange-400' : ''}`
              }
            >
              Contact
            </NavLink>
            <NavLink 
              to="/disclaimer" 
              className={({ isActive }) => 
                `hover:text-orange-400 transition-colors ${isActive ? 'text-orange-400' : ''}`
              }
            >
              Disclaimer
            </NavLink>
            <NavLink 
              to="/privacy" 
              className={({ isActive }) => 
                `hover:text-orange-400 transition-colors ${isActive ? 'text-orange-400' : ''}`
              }
            >
              Privacy
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}