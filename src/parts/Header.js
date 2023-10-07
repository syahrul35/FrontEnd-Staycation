import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandIcon from 'parts/IconText';

export default function Header() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className={`nav-item ${getNavLinkClass('/')}`}>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${getNavLinkClass('/browse-by')}`}>
                <Link to="/browse-by" className="nav-link">
                  Browse By
                </Link>
              </li>
              <li className={`nav-item ${getNavLinkClass('/storied')}`}>
                <Link to="/storied" className="nav-link">
                  Stories
                </Link>
              </li>
              <li className={`nav-item ${getNavLinkClass('/agents')}`}>
                <Link to="/agents" className="nav-link">
                  Agent
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
