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
  ];

  const isActiveRoute = (path) => location.pathname === path;
  useEffect(() => {
    if (animationPlayed.current) return; // Prevent re-initialization

    // Initial setup
    gsap.set(mainLogoRef.current, {
      width: "100%",
      x: 0,
      y: 0,
    });

    gsap.set(landingImageRef.current, {
      x: 0,
      y: 0,
    });

    gsap.set(navigationRef.current, {
      x: 0,
      y: 0,
      scale: 1,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        animationPlayed.current = true; // Set the flag to true after animation completes
        // Ensure elements are in their final state
        gsap.set(mainLogoRef.current, { width: "150px", x: -700, y: -200 });
        gsap.set(navigationRef.current, { x: "150%", y: 0, zIndex: 10 });
        gsap.set(landingImageRef.current, { x: 10, y: -550, scale: 0.6 });
        gsap.set(containerRef.current, { height: "200px" });
        gsap.set(nextGenRef.current, { opacity: 1, y: -200 });
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200",
        // scrub: true,
        once: true, // Play animation only once
      },
    });

    // Animate the logo
    tl.to(mainLogoRef.current, {
      width: "150px",
      x: -700,
      y: -200,
      ease: "power2.out", // Smooth easing
      duration: 1, // Short duration
    });

    // Animate the navigation to center
    tl.to(
      navigationRef.current,
      {
        x: "150%",
        y: 0,
        ease: "power2.out", // Smooth easing
        duration: 1,
        zIndex: 10,
      },
      "<"
    );

    // Animate the landing image
    tl.to(
      landingImageRef.current,
      {
        x: 10,
        y: -550,
        scale: 0.6,
        ease: "power2.out", // Smooth easing
        duration: 1,
      },
      "<"
    );
    tl.to(arrowRef.current, {
      display: "none",
    });

    // tl.to(navContainerRef.current, {
    //   position: "relative",
    // });

    // Container height and nextGen animation
    tl.to(
      containerRef.current,
      {
        height: "200px",
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
      <div ref={containerRef} className="relative  h-screen ">
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 right-0">
          <div ref={headerRef} className="w-full bg-[#0a0a0a] headerbg">
            <div className="headerbg lg:w-[100%] md:w-[100%] px-20 justify-between py-10 header sm:hidden hidden lg:flex md:flex items-center">
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
            <div className="w-[90%] mx-auto flex justify-between items-center my-10 header sm:flex lg:hidden md:hidden">
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
          <div className="w-[70%] mx-auto flex sm:my-[150px]  md:my-[150px] lg:my-[150px] my-[150px]  items-center flex-col relative">
            <div className="w-full">
              {" "}
              <img
                ref={mainLogoRef}
                src={logo}
                alt="TriggerX Logo"
                className="w-full"
              />
            </div>
            <div className="absolute sm:top-2 top-2 md:top-6 lg:top-13 xl:top-20">
              <img
                ref={landingImageRef}
                src={landing}
                alt="Landing illustration"
                className="lg:w-[500px] md:w-[400px] max-w-3xl sm:[250px] w-[250px]"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}

        <div
          ref={arrowRef}
          className="fixed right-5 bottom-10 md:right-10 md:bottom-20 z-50 flex flex-col items-center"
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
        </div>
      </div>
    </div>
  );
};

export default Landing;
