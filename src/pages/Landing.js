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
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [MobileAnimationCompleted, setMobileAnimationCompleted] =
    useState(false);

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

  const playAnimation = () => {
    if (animationPlayed.current) return;
    setTimeout(() => {
      console.log("Animation completed");
      window.scrollTo(0, 0); // Reset scroll position to top
    }, 0); // Adjust duration to your animation's timing
    // Calculate positions
    const calculatePositions = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      return {
        logo: {
          width: 200,
          x: viewportWidth * -0,
          y: -170,
        },
        nav: {
          x: viewportWidth * -0,
          y: viewportHeight * -0,
        },
        landing: {
          width: 500,
          x: viewportWidth * -0,
          y: -480,
        },
        mobile: {
          x: viewportWidth * -0,
          y: viewportHeight * -0,
        },
      };
    };

    const positions = calculatePositions();

    // Initial setup
    gsap.set(
      [
        mainLogoRef.current,
        landingImageRef.current,
        navigationRef.current,
        navMobileRef.current,
      ],
      {
        x: 0,
        y: 0,
      }
    );

    const tl = gsap.timeline({
      onComplete: () => {
        animationPlayed.current = true;
        setAnimationCompleted(true);
        gsap.set(containerRef.current, { height: "100px" });
      },
    });

    // Animation sequence
    tl.to(mainLogoRef.current, {
      width: positions.logo.width,
      x: positions.logo.x,
      y: positions.logo.y,
      left: "50%",
      ease: "power2.out",
      duration: 1,
    });

    tl.to(
      navigationRef.current,
      {
        x: positions.nav.x,
        y: positions.nav.y,
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
        width: positions.landing.width,
        x: positions.landing.x,
        y: positions.landing.y,
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
        left: "50%",
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

    // Continuous rotation animation
    gsap.to(circularTextRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  };

  const playMobileAnimation = () => {
    if (animationPlayed.current) return;

    setTimeout(() => {
      console.log("Animation completed");
      window.scrollTo(0, 0); // Reset scroll position to top
    }, 0); // Adjust duration to your animation's timing
    // Calculate positions

    const calculatePositions = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      return {
        logo: {
          width: 130, // Setting a width to make x and y values easier to calculate
          x: -58, // Centering and adding offset from center
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

    // Initial setup
    gsap.set(
      [
        mainLogoMRef.current,
        landingImageMRef.current,
        navigationMRef.current,
        navMobileMRef.current,
      ],
      {
        x: 0,
        y: 0,
        scale: 1,
      }
    );

    const tl = gsap.timeline({
      onComplete: () => {
        animationPlayed.current = true;
        setMobileAnimationCompleted(true);
        gsap.set(containerMRef.current, { height: "100px" });
      },
    });

    // Animation sequence
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
  };

  useEffect(() => {
    // Event listeners for different triggers
    const handleScroll = () => {
      playMobileAnimation();
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleArrowDown = () => {
    playAnimation();
  };

  useEffect(() => {
    // Event listeners for different triggers
    const handleScroll = () => {
      playAnimation();
    };

    const handleClick = () => {
      playAnimation();
    };

    const handleKeyPress = (event) => {
      // You can specify certain keys or remove this condition to trigger on any key
      if (event.key === "Enter") {
        playAnimation();
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyPress);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleArrowClick = () => {
    playAnimation();
  };

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
          x: -58, // Centering and adding offset from center
          y: -165, // 70% of the way down
        },
        nav: {
          x: viewportWidth * -0, // Center
          y: viewportHeight * -0, // 30% from top
        },
        landing: {
          width: 300,
          x: 0,
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
      },

      scrollTrigger: {
        trigger: containerMRef.current,
        start: "top top",
        end: "+=100",
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
                className="xl:w-[650px] lg:w=[500px] md:w-[400px]"
                style={{
                  opacity: imageOpacity,
                  transition: "opacity 0.3s ease",
                }}
              />
            </div>
          </div>
          {!animationCompleted && (
            <div
              ref={arrowRef}
              onClick={handleArrowDown}
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
          )}
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

            <div className="absolute sm:top-10 top-0 md:top-6 lg:top-10 xl:top-0">
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
          {!MobileAnimationCompleted && (
            <div
              ref={arrowRef}
              onClick={handleArrowClick}
              className="fixed inset-x-0 bottom-10 z-50 flex flex-col items-center"
            >
              <div className="scroll-arrow circular-text-container flex items-center flex-col ">
                <div className="border-none p-2 md:p-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0001 10.7918L5.47925 14.021C5.20147 14.2154 4.91341 14.2396 4.61508 14.0935C4.31675 13.9474 4.1673 13.701 4.16675 13.3543C4.16675 13.2154 4.19814 13.0835 4.26091 12.9585C4.32369 12.8335 4.41036 12.7362 4.52091 12.6668L10.0001 8.75014L15.4792 12.6668C15.5904 12.7362 15.6773 12.8335 15.7401 12.9585C15.8029 13.0835 15.834 13.2154 15.8334 13.3543C15.8334 13.6876 15.6842 13.9307 15.3859 14.0835C15.0876 14.2362 14.7992 14.2154 14.5209 14.021L10.0001 10.7918ZM10.0001 5.83347L5.47925 9.06264C5.20147 9.25708 4.91341 9.28153 4.61508 9.13597C4.31675 8.99041 4.1673 8.74347 4.16675 8.39514C4.16675 8.25625 4.19814 8.1243 4.26091 7.9993C4.32369 7.8743 4.41036 7.77708 4.52091 7.70764L10.0001 3.7918L15.4792 7.70847C15.5904 7.77791 15.6773 7.87514 15.7401 8.00014C15.8029 8.12514 15.834 8.25708 15.8334 8.39597C15.8334 8.7293 15.6842 8.97236 15.3859 9.12514C15.0876 9.27791 14.7992 9.25708 14.5209 9.06264L10.0001 5.83347Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>Swipe Up</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
