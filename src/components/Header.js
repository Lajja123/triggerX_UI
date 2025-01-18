// import React, { useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import new_logo from '../images/new_logo.png';

// function Header() {
//   const logoRef = useRef(null);
//   const location = useLocation();

//   useEffect(() => {
//     const logo = logoRef.current;
//     if (logo) {
//       logo.style.transform = 'rotateY(0deg)';
//       logo.style.transition = 'transform 1s ease-in-out';

//       const rotateLogo = () => {
//         logo.style.transform = 'rotateY(360deg)';
//         setTimeout(() => {
//           logo.style.transform = 'rotateY(0deg)';
//         }, 1000);
//       };

//       const interval = setInterval(rotateLogo, 5000);
//       return () => clearInterval(interval);
//     }
//   }, []);

//   const isActiveRoute = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 bg-[#0A0F1C]/80 backdrop-blur-xl border-b border-white/10">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-3 group">
//             <div ref={logoRef} className="w-10 h-10">
//               <img src={new_logo} alt="TriggerX Logo" />
//             </div>
//             <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
//               TriggerX
//             </span>
//           </Link>

//           <nav className="flex items-center">
//             <ul className="flex items-center space-x-8">
//               <li>
//                 <Link
//                   to="/"
//                   className={`font-medium transition-all duration-300 ${
//                     isActiveRoute('/')
//                       ? 'text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
//                       : 'text-gray-400 hover:text-white'
//                   }`}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/create-job"
//                   className={`font-medium transition-all duration-300 ${
//                     isActiveRoute('/create-job')
//                       ? 'text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
//                       : 'text-gray-400 hover:text-white'
//                   }`}
//                 >
//                   Create Job
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/dashboard"
//                   className={`font-medium transition-all duration-300 ${
//                     isActiveRoute('/dashboard')
//                       ? 'text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
//                       : 'text-gray-400 hover:text-white'
//                   }`}
//                 >
//                   Dashboard
//                 </Link>
//               </li>
//               <li className="pl-6">
//                 <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-1 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
//                   <ConnectButton />
//                 </div>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo from "../assets/logo.svg";
import nav from "../assets/nav.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({});
  const [prevRect, setPrevRect] = useState(null);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", path: "/", label: "Home" },
    { id: "create", path: "/create-job", label: "Create Job" },
    { id: "dashboard", path: "/dashboard", label: "Dashboard" },
  ];

  const isActiveRoute = (path) => location.pathname === path;

  const handleMouseEnter = (event) => {
    const hoveredElement = event.currentTarget;
    const rect = hoveredElement.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();

    const direction = prevRect
      ? rect.x > prevRect.x
        ? "right"
        : "left"
      : "none";

    setHighlightStyle({
      opacity: 1,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      transform: `translateX(${rect.x - navRect.x}px)`,
      transition: prevRect ? "all 0.3s ease" : "none",
    });

    setPrevRect(rect);
  };

  const handleMouseLeave = () => {
    setHighlightStyle((prev) => ({
      ...prev,
      opacity: 0,
      transition: "all 0.3s ease",
    }));
  };

  return (
    <div>
      <div className="lg:w-[80%] md:w-[90%] mx-auto justify-between my-10 header sm:hidden hidden lg:flex md:hidden items-center">
        <div>
          <img src={logo} alt="" className="lg:w-full md:w-[200px]" />
        </div>
        <div className="relative flex flex-col items-center">
          <img
            src={nav}
            alt="Background Design"
            className="absolute z-0 h-auto lg:max-w-min lg:w-[500px] md:[200px]"
            style={{ top: "-40px" }}
          />

          <nav
            ref={navRef}
            className="relative bg-[#181818F0] p-1 rounded-xl z-10"
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="absolute bg-gradient-to-r from-[#D9D9D924] to-[#14131324] rounded-xl border border-[#4B4A4A] opacity-0"
              style={highlightStyle}
            />

            <div className="relative flex gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  onMouseEnter={handleMouseEnter}
                  className={`
                    text-center lg:w-[150px] md:w-[100px] px-7 py-3 rounded-xl
                    text-white relative z-10 cursor-pointer
                    ${isActiveRoute(item.path) ? "text-white" : "text-gray-400"}
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div>
          <ConnectButton />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="w-[90%] mx-auto flex justify-between items-center my-10 header sm:flex lg:hidden md:flex">
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-10 z-0">
          <img src={nav} alt="Nav Background" className="w-64 h-auto z-0" />
        </div>
        <div className="flex-shrink-0 relative z-10">
          <img src={logo} alt="Logo" width={150} />
        </div>
        <div className="relative flex items-center gap-5">
          <div className="flex-shrink-0 relative z-10">
            <ConnectButton />
          </div>
          <div className="lg:hidden">
            <h4
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl cursor-pointer"
            >
              {menuOpen ? "✖" : "☰"}
            </h4>
            {menuOpen && (
              <div className="absolute top-full right-0 mt-3 bg-[#181818] p-4 rounded-md shadow-lg z-10">
                <nav
                  ref={navRef}
                  className="relative"
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="absolute bg-gradient-to-r from-[#D9D9D924] to-[#14131324] rounded-xl border border-[#4B4A4A] opacity-0"
                    style={highlightStyle}
                  />
                  <div className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          navigate(item.path);
                          setMenuOpen(false);
                        }}
                        onMouseEnter={handleMouseEnter}
                        className={`
                          lg:w-[135px] md:w-[100px] px-7 py-3 rounded-xl
                          relative z-10 cursor-pointer
                          ${
                            isActiveRoute(item.path)
                              ? "text-white"
                              : "text-gray-400"
                          }
                        `}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
