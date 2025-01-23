import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo from "../assets/logo.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import landing from "../assets/landing.svg";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({});
  const [prevRect, setPrevRect] = useState(null);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const landingImageRef = useRef(null);
  const logoRef = useRef(null);
  const mainLogoRef = useRef(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  // const navContainerRef = useRef(null);
  const navigationRef = useRef(null);
  const nextGenRef = useRef(null);
  const animationPlayed = useRef(false);
  const circularTextRef = useRef(null);
  const arrowRef = useRef(null);

  const navItems = [
    { id: "home", path: "/", label: "Home" },
    { id: "create", path: "/create-job", label: "Create Job" },
    { id: "dashboard", path: "/dashboard", label: "Dashboard" },
    { id: "docs", label: "Docs" },
  ];

  const isActiveRoute = (path) => location.pathname === path;
  useEffect(() => {
    if (animationPlayed.current) return;

    // Initial setup with viewport-relative positioning
    gsap.set(mainLogoRef.current, {
      width: "100%",
      xPercent: 0,
      yPercent: 0,
    });

    gsap.set(landingImageRef.current, {
      xPercent: 0,
      yPercent: 0,
      scale: 1,
    });

    gsap.set(navigationRef.current, {
      xPercent: 0,
      yPercent: 0,
      scale: 1,
    });

    // Create a function to calculate viewport-based positions
    const calculatePositions = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      return {
        logo: {
          width: Math.min(300), // Starting width

          xPercent: -50, // Center horizontally
          yPercent: -400, // 40% from top
          scale: 0.6,
        },
        nav: {
          xPercent: -50, // Center
          yPercent: -0, // 30% from top
        },
        landing: {
          xPercent: -0, // Center horizontally
          yPercent: -100, // 40% from top
          scale: 0.6,
        },
      };
    };

    const positions = calculatePositions();

    const tl = gsap.timeline({
      onComplete: () => {
        animationPlayed.current = true;
        // Set final positions using calculated values
        gsap.set(mainLogoRef.current, {
          width: positions.logo.width,

          xPercent: positions.logo.xPercent,
          yPercent: positions.logo.yPercent,
        });
        gsap.set(navigationRef.current, {
          xPercent: positions.nav.xPercent,
          yPercent: positions.nav.yPercent,
          left: "50%",
          transform: "translateX(-50%)", // Center the navigation
        });
        gsap.set(landingImageRef.current, {
          xPercent: positions.landing.xPercent,
          yPercent: positions.landing.yPercent,
          scale: positions.landing.scale,
          left: "50%",
        });
        gsap.set(containerRef.current, { height: "100px" });
        gsap.set(nextGenRef.current, { opacity: 1, yPercent: -20 });
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200",
        once: true,
      },
    });

    // Animate to final positions
    tl.to(mainLogoRef.current, {
      xPercent: positions.logo.xPercent,
      yPercent: positions.logo.yPercent,
      left: "50%",
      ease: "power2.out",
      duration: 1,
    });

    tl.to(
      navigationRef.current,
      {
        xPercent: positions.nav.xPercent,
        yPercent: positions.nav.yPercent,
        left: "50%",
        transform: "translateX(-50%)",
        ease: "power2.out",
        duration: 1,
        zIndex: 10,
      },
      "<"
    );

    tl.to(
      landingImageRef.current,
      {
        xPercent: positions.landing.xPercent,
        yPercent: positions.landing.yPercent,
        scale: positions.landing.scale,
        left: "50%",
        ease: "power2.out",
        duration: 1,
      },
      "<"
    );
    // tl.to(navContainerRef.current, {
    //   position: "relative",
    // });

    // Container height and nextGen animation
    tl.to(
      containerRef.current,
      {
        height: "100px",
        duration: 1,
        ease: "power2.out",
      },
      0
    );
    tl.to(
      nextGenRef.current,

      {
        height: "100px",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    gsap.to(circularTextRef.current, {
      rotation: 360, // Full circle
      duration: 10, // Duration of one full rotation
      repeat: -1, // Infinite loop
      ease: "linear", // Smooth continuous rotation
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
      <div ref={containerRef} className="relative  h-screen w-full ">
        {/* Fixed Header */}
        <div
          ref={headerRef}
          className="fixed top-0 left-0 right-0 w-full h-[100px]"
        >
          <div className="w-full bg-[#0a0a0a] headerbg">
            <div className="headerbg lg:w-[100%] md:w-[100%] lg:px-20 md:px-10 sm:px-10 px-10 justify-between py-10 header sm:hidden hidden lg:flex md:flex items-center">
              {/* Logo Container */}
              <div className="w-[120px] opacity-0">
                {/* <img
                ref={logoRef}
                src={logo}
                alt="TriggerX Logo"
                className="w-full"
              /> */}
              </div>

              {/* Navigation Container - Now positioned absolutely for animation */}
              <div ref={navigationRef} className="absolute left-1/6   z-100 ">
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
                    text-center lg:w-[120px] md:w-[100px] px-3 py-2 rounded-xl
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

              {/* Connect Wallet */}
              <button className="relative bg-[#222222] text-black  py-0 rounded-full group transition-transform">
                <span className="absolute inset-0 p-0 bg-[#222222] text-black border border-white rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2">
                  {/* This is the red background box */}
                </span>
                <span className="absolute inset-0 bg-white p-0 rounded-full scale-100 translate-y-0 group-hover:translate-y-0">
                  {/* This is the white box that moves up */}
                </span>
                <span className="relative z-10 p-0 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <ConnectButton />
                </span>
              </button>
            </div>
            <div className="w-[100%] px-10 flex justify-between items-center py-10 header sm:flex lg:hidden md:hidden">
              {/* <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-10 z-0">
              <img src={nav} alt="Nav Background" className="w-64 h-auto z-0" />
            </div> */}
              <div className="flex-shrink-0 relative z-10">
                {/* <img src={logo} alt="Logo" width={150} /> */}
                <div className="lg:hidden">
                  <h4
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white text-2xl cursor-pointer"
                  >
                    {menuOpen ? "✖" : "☰"}
                  </h4>
                  {menuOpen && (
                    <div className="absolute top-full left-0 mt-3 bg-[#181818] p-4 rounded-md shadow-lg z-10">
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
              <div className="relative flex items-center gap-5">
                <div className="flex-shrink-0 relative z-10">
                  <ConnectButton />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Section with Animated Elements */}
          <div className="w-[100%] px-20 flex sm:my-[150px]  md:my-[100px] lg:my-[100px] my-[150px]  items-center flex-col relative">
            <div className="w-full">
              <img
                ref={mainLogoRef}
                src={logo}
                alt="TriggerX Logo"
                className="w-full"
              />
            </div>

            <div className="absolute sm:top-3 top-3 md:top-6 lg:top-13 xl:top-20">
              <img
                ref={landingImageRef}
                src={landing}
                alt="Landing illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}

        {/* <div
          ref={arrowRef}
          className="fixed right-5 bottom-10 md:right-10 md:bottom-20 z-50 flex flex-col items-center "
        >
          <div className="circular-text-container">
            <div className="scroll-arrow border border-white rounded-full p-2 md:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Landing;
