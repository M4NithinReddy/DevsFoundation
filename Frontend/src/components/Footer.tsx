import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-secondary via-secondary-light to-secondary text-white">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">
              Devs Foundation
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering communities through innovative drone technology education
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-light">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-primary transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-primary transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-light">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span className="text-gray-300">Hyderabad, Telangana</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <span className="text-gray-300">contact@devsfoundation.org</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span className="text-gray-300">+91 91888 83344</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-light">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-primary transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Devs Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}