import React from "react";
import Logo from "../Logo";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className="shadow max-h-52 bg-gradient-to-r from-bob-pri to-bob-pri2 text-white pt-6 mt-auto">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="">
            <Logo width="300px" />
          </div>

          <div className="flex flex-row mr-10">
            <div>
              <h3 className="text-lg font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-bob-blue text-sm text-white py-2 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
