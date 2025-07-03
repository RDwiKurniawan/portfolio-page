import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          Portfolio Builder
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/edit">
                <Button
                  variant={
                    location.pathname === "/edit" ? "secondary" : "primary"
                  }
                  size="sm"
                >
                  Edit Portfolio
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/view">
                <Button
                  variant={
                    location.pathname === "/view" ? "secondary" : "primary"
                  }
                  size="sm"
                >
                  View Portfolio
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
