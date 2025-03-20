import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src="/aj.png" alt="Logo" className="h-12" />
          </div>
          <div className="w-full text-orange-500  md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold mb-2">Company</h5>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 text-orange-500 md:mb-0">
            <h5 className="font-bold mb-2">Support</h5>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/Contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 text-orange-500  md:mb-0">
            <h5 className="font-bold mb-2">Follow Us</h5>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.facebook.com/ajapexmedia" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} AJ APEX MEDIA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
