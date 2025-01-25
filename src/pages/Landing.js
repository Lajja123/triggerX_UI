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
  const navMobileRef = useRef(null);
  const navMobileMRef = useRef(null);

  const landingImageRef = useRef(null);
  const landingImageMRef = useRef(null);
  const logoRef = useRef(null);
  const mainLogoRef = useRef(null);
  const containerRef = useRef(null);
  const headerMRef = useRef(null);
  const mainLogoMRef = useRef(null);
  const containerMRef = useRef(null);
  const headerRef = useRef(null);
  const navigationMRef = useRef(null);
  const navigationRef = useRef(null);
  const [imageOpacity, setImageOpacity] = useState(1); // State for image opacity
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

    // Initial setup (using x and y now)
    gsap.set(mainLogoRef.current, {
      x: 0,
      y: 0,
    });

    gsap.set(landingImageRef.current, {
      x: 0,
      y: 0,
      scale: 1,
    });

    gsap.set(navigationRef.current, {
      x: 0,
      y: 0,
      scale: 1,
    });

    gsap.set(navMobileRef.current, {
      x: 0,
      y: 0,
      scale: 1,
    });

    // Calculate absolute pixel positions
    const calculatePositions = () => {
      const logoElement = mainLogoRef.current;
      const navElement = navigationRef.current;
      const landingElement = landingImageRef.current;
      const navMobileElement = navMobileRef.current;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      return {
        logo: {
          width: 200, // Setting a width to make x and y values easier to calculate
          x: viewportWidth * -0, // Centering and adding offset from center
          y: -170, // 70% of the way down
        },
        nav: {
          x: viewportWidth * -0, // Center
          y: viewportHeight * -0, // 30% from top
        },
        landing: {
          x: viewportWidth * -0,
          y: viewportHeight * -0.6,
          scale: 0.8,
        },
        mobile: {
          x: viewportWidth * -0, // Center
          y: viewportHeight * -0, // 30% from top
        },
      };
    };

    const positions = calculatePositions();

    const tl = gsap.timeline({
      onComplete: () => {
        animationPlayed.current = true;
        // Set final positions using calculated values
        gsap.set(containerRef.current, { height: "100px" });
        window.scrollTo({
          top: 0,
          behavior: "smooth",
          duration: 1.5, // Adjust duration as needed for desired smoothness
          ease: "power4.inOut",
        }); // Scroll smoothly back to top
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
      width: positions.logo.width, // Animate the width
      x: positions.logo.x,
      y: positions.logo.y,
      left: "50%", // Need to center the element as the width is fixed
      ease: "power2.out",
      duration: 1,
    });

    tl.to(
      navigationRef.current,
      {
        x: positions.nav.x,
        y: positions.nav.y,
        left: "50%", // Keep centering
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
        x: positions.landing.x,
        y: positions.landing.y,
        scale: positions.landing.scale,
        left: "50%",
        ease: "power2.out",
        duration: 1,
      },
      "<"
    );
    tl.to(
      navMobileRef.current,
      {
        x: positions.nav.x,
        y: positions.nav.y,
        left: "50%", // Keep centering
        transform: "translateX(-50%)",
        ease: "power2.out",
        duration: 1,
        zIndex: 10,
      },
      "<"
    );

    tl.to(
      containerRef.current,
      {
        height: "100px",
        duration: 1,
        ease: "power2.out",
      },
      0
    );

    gsap.to(circularTextRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  useEffect(() => {
    if (animationPlayed.current) return;

    // Initial setup (using x and y now)
    gsap.set(mainLogoMRef.current, {
      x: 0,
      y: 0,
    });

    gsap.set(landingImageMRef.current, {
      x: 0,
      y: 0,
      scale: 1,
    });

    gsap.set(navigationMRef.current, {
      x: 0,
      y: 0,
      scale: 1,
    });

    gsap.set(navMobileMRef.current, {
      x: 0,
      y: 0,
      scale: 1,
    });

    // Calculate absolute pixel positions
    const calculatePositions = () => {
      const logoElement = mainLogoMRef.current;
      const navElement = navigationMRef.current;
      const landingElement = landingImageMRef.current;
      const navMobileElement = navMobileMRef.current;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      return {
        logo: {
          width: 130, // Setting a width to make x and y values easier to calculate
          x: -40, // Centering and adding offset from center
          y: -165, // 70% of the way down
        },
        nav: {
          x: viewportWidth * -0, // Center
          y: viewportHeight * -0, // 30% from top
        },
        landing: {
          width: 300,
          x: viewportWidth * -0,
          y: -355,
          scale: 0.8,
        },
      };
    };

    const positions = calculatePositions();

    const tl = gsap.timeline({
      onComplete: () => {
        animationPlayed.current = true;
        // Set final positions using calculated values
        gsap.set(containerMRef.current, { height: "100px" });
        window.scrollTo({
          top: 0,
          behavior: "smooth",
          duration: 1.5, // Adjust duration as needed for desired smoothness
          ease: "power4.inOut",
        }); // Scroll smoothly back to top
      },

      scrollTrigger: {
        trigger: containerMRef.current,
        start: "top top",
        end: "+=200",
        once: true,
      },
    });

    // Animate to final positions
    tl.to(mainLogoMRef.current, {
      width: positions.logo.width, // Animate the width
      x: positions.logo.x,
      y: positions.logo.y,

      ease: "power2.out",
      duration: 1,
      zIndex: 10,
      position: "relative",
    });

    tl.to(
      navigationMRef.current,
      {
        x: positions.nav.x,
        y: positions.nav.y,
        left: "50%", // Keep centering
        transform: "translateX(-50%)",
        ease: "power2.out",
        duration: 1,
        zIndex: 10,
      },
      "<"
    );

    tl.to(
      landingImageMRef.current,
      {
        width: positions.landing.width, // Animate the width

        x: positions.landing.x,
        y: positions.landing.y,
        scale: positions.landing.scale,
        left: "50%",
        ease: "power2.out",
        duration: 1,
      },
      "<"
    );

    tl.to(
      containerMRef.current,
      {
        height: "100px",
        duration: 1,
        ease: "power2.out",
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (animationPlayed.current && window.scrollY > 0) {
        gsap.to(landingImageRef.current, {
          opacity: 0,
          duration: 0, // Short duration for fade out
          ease: "power1.inOut",
        });
      } else {
        gsap.to(landingImageRef.current, {
          opacity: 1,
          duration: 0.8, // Short duration for fade in
          ease: "power1.inOut",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationPlayed]);

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
      <div
        ref={containerRef}
        className="relative  h-screen w-full hidden sm:hidden md:hidden lg:block xl:block"
      >
        {/* Fixed Header */}
        <div
          ref={headerRef}
          className="fixed top-0 left-0 right-0 w-full h-[100px]"
        >
          <div className="w-full bg-[#0a0a0a] headerbg">
            <div className="headerbg lg:w-[100%] md:w-[100%] lg:px-20 md:px-10 sm:px-10 px-10 justify-between py-10 header sm:hidden hidden lg:flex md:hidden items-center">
              {/* Logo Container */}
              <div className="w-[120px] opacity-0"></div>

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
            <div className="w-[100%] px-10 flex justify-between items-center py-10 header sm:flex lg:hidden md:flex">
              {/* <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-10 z-0">
              <img src={nav} alt="Nav Background" className="w-64 h-auto z-0" />
            </div> */}
              <div className="flex-shrink-0 relative z-10 " ref={navMobileRef}>
                {/* <img src={logo} alt="Logo" width={150} /> */}
                <div className="lg:hidden ">
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

            <div className="absolute sm:top-10 top-0 md:top-6 lg:top-10 xl:top-20">
              <img
                ref={landingImageRef}
                src={landing}
                alt="Landing illustration"
                style={{
                  opacity: imageOpacity,
                  transition: "opacity 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={containerMRef}
        className="relative  h-screen w-full  sm:block md:block lg:hidden xl:hidden block"
      >
        {/* Fixed Header */}
        <div
          ref={headerMRef}
          className="fixed top-0 left-0 right-0 w-full h-[100px]"
        >
          <div className="w-full bg-[#0a0a0a] headerbg">
            <div className="w-[100%] px-10 flex justify-end gap-3 items-center py-10 header sm:flex lg:hidden md:flex">
              {/* <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-10 z-0">
              <img src={nav} alt="Nav Background" className="w-64 h-auto z-0" />
            </div> */}

              <div className="relative  items-center gap-5 ">
                <div className="flex-shrink-0 relative z-10 text-sm sm:hidden hidden md:flex">
                  <ConnectButton />
                </div>
              </div>
              <div className="flex-shrink-0 relative z-10 " ref={navMobileMRef}>
                <div className="lg:hidden ">
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
                       md:w-[150px] px-7 py-3 rounded-xl
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
                          <div className="relative  items-center gap-5 sm:flex flex md:hidden">
                            <div className="flex-shrink-0 relative z-10 text-sm ">
                              <ConnectButton />
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Section with Animated Elements */}
          <div className="w-[100%] px-20 flex sm:my-[100px]  md:my-[100px] lg:my-[100px] my-[100px]  items-center flex-col relative">
            <div className="w-full relative">
              <img
                ref={mainLogoMRef}
                src={logo}
                alt="TriggerX Logo"
                className="w-full"
              />
            </div>

            <div className="absolute sm:top-10 top-2 md:top-6 lg:top-10 xl:top-20">
              <img
                ref={landingImageMRef}
                src={landing}
                alt="Landing illustration"
                className="md:w-[450px] sm:w-[250px] w-[250px]"
                style={{
                  opacity: imageOpacity,
                  transition: "opacity 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
