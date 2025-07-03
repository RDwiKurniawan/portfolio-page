import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center text-sm text-gray-400">
        &copy; {currentYear} Portfolio Builder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
