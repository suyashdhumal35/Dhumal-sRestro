import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-2">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">About Us</h2>
            <p className="text-gray-400 text-sm">
              Discover the best restaurants in town. Order food online and enjoy
              delicious meals delivered to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-orange-400">Home</a></li>
              <li><a href="#" className="hover:text-orange-400">Menu</a></li>
              <li><a href="#" className="hover:text-orange-400">About</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <p className="text-gray-400 text-sm flex items-center">
              <FaMapMarkerAlt className="mr-2 text-orange-400" /> Kandivali West, Charkop, Sahyadri Nagar
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              <FaPhone className="mr-2 text-orange-400" /> +91 869200356
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              <FaEnvelope className="mr-2 text-orange-400" /> suyashdhumal@gmail.com
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-2xl">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@SuyashhhhYT" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 text-2xl">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Suyash Dhumal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
