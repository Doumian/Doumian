
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white header-fixed">
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-semibold text-fortaleny-dark text-xl md:text-2xl transition-all hover:text-fortaleny-green">
            Ayuntamiento de Fortaleny
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 text-fortaleny-dark hover:text-fortaleny-green transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-20`}
      >
        <nav className="container-page">
          <ul className="space-y-6 text-center">
            <li>
              <Link 
                to="/" 
                className="text-2xl font-medium text-fortaleny-dark hover:text-fortaleny-green transition-colors"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/flora" 
                className="text-2xl font-medium text-fortaleny-dark hover:text-fortaleny-green transition-colors"
                onClick={toggleMenu}
              >
                Flora
              </Link>
            </li>
            <li>
              <Link 
                to="/fauna" 
                className="text-2xl font-medium text-fortaleny-dark hover:text-fortaleny-green transition-colors"
                onClick={toggleMenu}
              >
                Fauna
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
