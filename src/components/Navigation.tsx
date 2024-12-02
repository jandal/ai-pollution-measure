import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link 
            to="/" 
            style={location.pathname === '/' ? {
              backgroundColor: 'var(--muted-yellow)',
              color: 'var(--steel-grey-dark)'
            } : {}}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link 
            to="/scanner"
            style={location.pathname === '/scanner' ? {
              backgroundColor: 'var(--muted-yellow)',
              color: 'var(--steel-grey-dark)'
            } : {}}
          >
            Scanner
          </Link>
        </li>
        <li>
          <Link 
            to="/analytics"
            style={location.pathname === '/analytics' ? {
              backgroundColor: 'var(--muted-yellow)',
              color: 'var(--steel-grey-dark)'
            } : {}}
          >
            Analytics
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
