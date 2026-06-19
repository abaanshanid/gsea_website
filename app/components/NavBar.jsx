import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Events', href: '/events' },
    { name: 'Sponsorship', href: '/sponsorship' },
    { name: 'Media', href: '/media' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    /* Added snap-start so the header boundary is registered if the user scrolls to the absolute top */
    <div className="navbar bg-base-100 sticky top-0 left-0 right-0 z-50 shadow snap-start">
      
      {/* --- NAVBAR START --- */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <a href="/#home" className="btn btn-ghost text-2xl font-bold">
          GSEA
        </a>
      </div>

      {/* --- NAVBAR CENTER --- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* --- NAVBAR END --- */}
      <div className="navbar-end">
        <a href="/sponsorship" className="btn btn-primary text-white">
          Get Involved
        </a>
      </div>
      
    </div>
  );
};

export default Navbar;