import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import chain from "../assets/chain.svg";
import architect from "../assets/architect.svg";
import architect2 from "../assets/architect2.svg";
import secure from "../assets/secure.svg";
import job from "../assets/job.svg";
import power from "../assets/power.svg";
import bls from "../assets/bls.svg";
import insights from "../assets/insights.svg";
import choose from "../assets/chooseTrigger.svg";
import eigen from "../assets/eigen.svg";
import avs from "../assets/avs.svg";
import honesty from "../assets/honesty.svg";
import security from "../assets/security.svg";
import validation from "../assets/validation.svg";
import submit from "../assets/submit.svg";
import scale from "../assets/scale.svg";
import track from "../assets/track.svg";
import Minsights from "../assets/M-insights.svg";
import MEigen from "../assets/M-Eigen.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo from "../assets/logo.svg";
import nav from "../assets/nav.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import landing from "../assets/landing.svg";

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
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
  const navContainerRef = useRef(null);
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
        gsap.set(containerRef.current, { height: "150px" });
        gsap.set(nextGenRef.current, { opacity: 1, y: -200 });
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150",
        scrub: true,
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
      delay: 0.1, // Slight delay for smooth start
    });

    // Animate the navigation to center
    tl.to(
      navigationRef.current,
      {
        x: "150%",
        y: 0,
        ease: "power2.out", // Smooth easing
        duration: 1,
        delay: 0.2,
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
        delay: 0.3,
      },
      "<"
    );
    tl.to(arrowRef.current, {
      display: "none",
    });

    tl.to(navContainerRef.current, {
      position: "relative",
    });

    // Container height and nextGen animation
    tl.to(
      containerRef.current,
      {
        height: "150px",
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
      },
      0
    );
    tl.to(
      nextGenRef.current,

      {
        opacity: 1,
        y: -500,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      },
      0
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
    <>
      <div>
        <div ref={containerRef} className="relative h-[100vh] ">
          {/* Fixed Header */}
          <div ref={navContainerRef} className="fixed top-0 left-0 right-0">
            <div ref={headerRef} className="w-full">
              <div className="lg:w-[80%] md:w-[90%] mx-auto justify-between my-10 header sm:hidden hidden lg:flex md:hidden items-center">
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
            </div>

            {/* Hero Section with Animated Elements */}
            <div className="w-[70%] mx-auto flex my-[150px] items-center flex-col relative">
              <img
                ref={mainLogoRef}
                src={logo}
                alt="TriggerX Logo"
                className="w-full"
              />
              <div className="absolute top-20">
                <img
                  ref={landingImageRef}
                  src={landing}
                  alt="Landing illustration"
                  className="lg:w-full md:w-[500px]"
                />
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="w-[90%] mx-auto flex justify-between items-center my-10 header sm:flex lg:hidden md:flex">
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-10 z-0">
              <img src={nav} alt="Nav Background" className="w-64 h-auto z-0" />
            </div>
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
            <div className="relative flex items-center gap-5">
              <div className="flex-shrink-0 relative z-10">
                <ConnectButton />
              </div>
            </div>
          </div>
          <div
            ref={arrowRef}
            className="fixed right-10 bottom-20 z-50 flex flex-col items-center"
          >
            <div className="circular-text-container ">
              <div className="scroll-arrow border border-white rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
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

        <div>
          <div
            // ref={nextGenRef}
            className="relative w-[90%] mx-auto lg:my-40 md:my-40 my-10 sm:my-10"
          >
            <h1 className="relative text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl leading-[3rem] lg:leading-0 md:leading-12 sm:leading-15">
              Next-Gen Blockchain
            </h1>
            <h1 className="relative text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl lg:mt-3 md:mt-3 sm:mt-0 mt-0 leading-[3rem] lg:leading-0 md:leading-0 sm:leading-15">
              Automation
            </h1>
            <div className="bg-[#FCFCFC] rounded-2xl lg:px-8 lg:py-4  md:px-8 md:py-4  px-5 py-3 flex items-center justify-center gap-4 shadow-md  mx-auto mt-8 min-w-min w-[300px]">
              <span className="text-[#4B4B4B] ">Seamless</span>
              <div className="h-6 border-l border-[#4B4B4B]"></div>
              <span className="text-[#4B4B4B] ">Secure</span>
              <div className="h-6 border-l border-[#4B4B4B]"></div>
              <span className="text-[#4B4B4B] ">Scalable</span>
            </div>
          </div>

          <div className=" flex items-center lg:my-40 md:my-40 my-20 sm:my-20">
            {/* Content Container */}
            <div className=" w-[80%] mx-auto flex justify-between items-center gap-5 sm:flex-col lg:flex-row md:flex-col flex-col">
              {/* Text Content */}
              <div className="lg:max-w-[65%] md:max-w-[100%] sm:max-w-[65%] relative ">
                <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg text-md sm:text-md lg:leading-[2rem] md:leading-[2rem] sm:lg:leading-[1.5rem] leading-[1.5rem] p-9 tracking-wide font-normal">
                  TriggerX is the future of blockchain automation—bringing ease,
                  trust, and innovation to developers, dApps, and enterprises.
                  Powered by EigenLayer's AVS (Actively Validated Services), we
                  deliver reliable and secure automation across multi-chain
                  ecosystems.
                </h4>

                {/* Decorative Elements */}
                <div className="absolute inset-0 border-2 border-black/20 ">
                  {/* Top Left Corner */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#C07AF6] rounded-tl-md"></div>
                  {/* Bottom Right Corner */}
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#C07AF6] rounded-br-md"></div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="relative bg-[#222222] text-black border border-white px-6 py-3 rounded-full group transition-transform">
                  <span className="absolute inset-0 bg-[#222222] border border-white rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2">
                    {/* This is the red background box */}
                  </span>
                  <span className="absolute inset-0 bg-white rounded-full scale-100 translate-y-0 group-hover:translate-y-0">
                    {/* This is the white box that moves up */}
                  </span>
                  <span className="relative z-10 px-6 py-3 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    Create Job
                  </span>
                </button>
                <button className="relative bg-[#222222] text-black border border-white px-6 py-3 rounded-full group transition-transform">
                  <span className="absolute inset-0 bg-[#222222] border border-white rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2">
                    {/* This is the red background box */}
                  </span>
                  <span className="absolute inset-0 bg-white rounded-full scale-100 translate-y-0 group-hover:translate-y-0">
                    {/* This is the white box that moves up */}
                  </span>
                  <span className="relative z-10 px-6 py-3 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-10  lg:w-[90%] md:w-[90%] sm:[100%] w-[100%] mx-auto lg:mt-40 md:mt-40 mt-20 sm:mt-20 lg:flex-row md:flex-col sm:flex-col flex-col">
            {/* Left side - Title */}
            <div className="flex-1">
              <h2 className="text-white lg:text-6xl font-normal md:text-5xl  sm:text-4xl text-4xl w-[100%] ">
                <div>Why Choose</div>
                <div>TriggerX?</div>
              </h2>
            </div>
            {/* Right side - Feature Card */}
            <div className="flex-1 sm:hidden lg:flex md:flex hidden">
              <div className="relative bg-[#111111] rounded-xl flex">
                {/* Content */}
                <div className="relative z-10 p-8">
                  <h3 className="text-white text-2xl  mb-4">
                    Seamless Multi-Chain Support
                  </h3>
                  <h4 className="text-[#A2A2A2] ">
                    Automate tasks across diverse blockchain networks, including
                    emerging Layer 2 (L2) solutions.
                  </h4>
                </div>
                <img src={chain} alt={""} />
              </div>
            </div>
            <div className=" lg:hidden md:hidden sm:flex ">
              <div className="relative bg-[#111111] rounded-xl flex flex-end">
                {/* Content */}
                <div className="relative z-10 p-8">
                  <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                    Seamless Multi-Chain Support
                  </h3>
                  <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                    Automate tasks across diverse blockchain networks, including
                    emerging Layer 2 (L2) solutions.
                  </h4>
                </div>
                <img src={chain} alt={""} className="w-[100px]" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-10 flex-col lg:w-[90%] md:w-[90%] sm:[100%] w-[100%] mx-auto lg:mt-10 md:mt-10 mt-5 sm:mt-5">
            <div className="md:hidden sm:hidden lg:flex hidden ">
              <div className="grid grid-cols-4 gap-6">
                {/* Customizable Job Templates */}
                <div className="relative bg-[#111111]  rounded-lg flex items-start">
                  <div className="relative z-10 p-8">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      Customizable Job Templates
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      Ready-to-use templates for time-based, condition-based,
                      and event-triggered automation
                    </h4>
                  </div>
                  <img src={job} alt={""} />
                </div>

                {/* Crypto-Economic Security */}
                <div className="relative bg-[#111111]  rounded-lg flex items-start ">
                  <img src={secure} alt={""} />

                  <div className="relative z-10 p-8">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      Crypto-Economic Security
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      Powered by EigenLayer's AVS, ensuring safe and reliable
                      task execution
                    </h4>
                  </div>
                </div>

                {/* Decentralized Keeper Network */}
                <div className="relative bg-[#111111] p-8 rounded-lg">
                  <div className="relative z-10">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      Decentralized Keeper Network
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      Resilient and tamper-resistant infrastructure powered by
                      decentralized operators
                    </h4>
                  </div>
                </div>

                {/* Scalable Architecture */}
                <div className="relative bg-[#111111] rounded-lg flex items-end flex-col">
                  <img src={architect} alt={""} />

                  <div className="relative z-10 p-8 ">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      Scalable Architecture
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      Instantly expand to new blockchains with minimal
                      configuration effort
                    </h4>
                  </div>
                  <img src={architect2} alt={""} />
                </div>

                {/* Powered by EigenLayer - Spans 2 columns */}
                <div className="relative bg-[#111111]  rounded-lg  flex items-start">
                  <div className="relative z-10 p-8">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      Powered by EigenLayer
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      Uses EigenLayer's Active Validator System (AVS) for robust
                      economic security
                    </h4>
                  </div>
                  <img src={power} alt={""} />
                </div>

                {/* BLS Signature Aggregation */}
                <div className="relative bg-[#111111]  rounded-lg col-span-2 flex  items-center">
                  <img src={bls} alt={""} />

                  <div className="relative z-10 p-8">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      BLS Signature Aggregation
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      Efficient aggregation of task results with cryptographic
                      security, minimizing costs and execution time
                    </h4>
                  </div>
                </div>

                {/* Real-Time Monitoring & Insights */}
                <div className="relative bg-[#111111] rounded-lg flex items-start">
                  <div className="relative z-10 p-8 ">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      Real-Time Monitoring & Insights
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      User dashboards to submit tasks, track job progress, and
                      view keeper performance metrics
                    </h4>
                  </div>
                  <img src={insights} alt={""} />
                </div>
              </div>
            </div>
            <div className="lg:hidden md:flex sm:flex flex">
              <div className="grid grid-cols-2 gap-3">
                {/* Decentralized Keeper Network */}
                <div className="relative bg-[#111111] p-8 rounded-lg">
                  <div className="relative z-10">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      Decentralized Keeper Network
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      Resilient and tamper-resistant infrastructure powered by
                      decentralized operators
                    </h4>
                  </div>
                </div>

                {/* Scalable Architecture */}
                <div className="relative bg-[#111111] rounded-lg flex items-end flex-col">
                  <img src={architect} alt={""} />

                  <div className="relative z-10 p-8 ">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      Scalable Architecture
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      Instantly expand to new blockchains with minimal
                      configuration effort
                    </h4>
                  </div>
                  {/* <img src={architect2} alt={""} /> */}
                </div>

                {/* Customizable Job Templates */}
                <div className="relative bg-[#111111]  rounded-lg flex items-start">
                  <div className="relative z-10 p-8">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      Customizable Job Templates
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      Ready-to-use templates for time-based, condition-based,
                      and event-triggered automation
                    </h4>
                  </div>
                  <img src={job} alt={""} className="sm:hidden hidden" />
                </div>

                {/* Crypto-Economic Security */}
                <div className="relative bg-[#111111]  rounded-lg flex items-start ">
                  <img src={secure} alt={""} className="sm:hidden hidden" />

                  <div className="relative z-10 p-8">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      Crypto-Economic Security
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      Powered by EigenLayer's AVS, ensuring safe and reliable
                      task execution
                    </h4>
                  </div>
                </div>

                {/* BLS Signature Aggregation */}
                <div className="relative bg-[#111111]  rounded-lg col-span-2 flex  items-center">
                  <img src={bls} alt={""} className="w-[100px]" />

                  <div className="relative z-10 p-8">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      BLS Signature Aggregation
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      Efficient aggregation of task results with cryptographic
                      security, minimizing costs and execution time
                    </h4>
                  </div>
                </div>

                {/* Powered by EigenLayer - Spans 2 columns */}
                <div className="relative bg-[#111111]  rounded-lg  flex items-center">
                  <div className="relative z-10 p-8">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      Powered by EigenLayer
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      Uses EigenLayer's Active Validator System (AVS) for robust
                      economic security
                    </h4>
                  </div>
                  <img src={MEigen} alt={""} className="sm:hidden hidden" />
                </div>

                {/* Real-Time Monitoring & Insights */}
                <div className="relative bg-[#111111] rounded-lg flex items-center">
                  <img src={Minsights} alt={""} className="sm:hidden hidden" />
                  <div className="relative z-10 p-8 ">
                    <h3 className="text-white text-lg lg:text-2xl md:text-2xl sm:text-lg  mb-4">
                      Real-Time Monitoring & Insights
                    </h3>
                    <h4 className="text-[#A2A2A2] lg:text-lg md:text-lg sm:text-sm text-sm">
                      User dashboards to submit tasks, track job progress, and
                      view keeper performance metrics
                    </h4>
                  </div>
                  {/* <img src={insights} alt={""} /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mx-[50px] md:mx-[50px] sm:mx-[30px] mx-[30px] lg:my-40 md:my-40 my-10 sm:my-10">
            <div className="bg-white rounded-3xl  shadow-lg text-black">
              <div className=" flex items-start relative ">
                <div className="flex items-start justify-between flex-col p-8 w-[90%]">
                  <div className="relative lg:p-8 md:p-8 sm:p-0 p-0 z-10">
                    <h1 className="lg:text-6xl md:text-5xl sm:text-2xl text-2xl">
                      What Can You Automate
                    </h1>
                    <h1 className="lg:text-6xl md:text-5xl sm:text-2xl text-2xl relative lg:pt-6 md:pt-6 sm:pt-3 pt-3 ">
                      with
                      <span className="relative text-[#5047FF] py-2 px-4 ml-3 lg:text-6xl md:text-5xl sm:text-2xl text-2xl ">
                        TriggerX ?{/* Decorative Elements */}
                        <div className="absolute inset-0 border-2 border-transparent pointer-events-none">
                          {/* Top Left Corner */}
                          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#5047FF] rounded-tl-md"></div>
                          {/* Bottom Right Corner */}
                          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#5047FF] rounded-br-md"></div>
                        </div>
                      </span>
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 lg:py-8 md:py-8 sm:py-8 py-8 lg:px-8 md:px-8 sm:px-0 px-0 ">
                    {/* First Item */}
                    <div className="space-y-4">
                      <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl ">
                        01
                      </div>

                      <h2 className="text-xl px-2">Time-Based Tasks</h2>
                      <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-lg">
                        Schedule automated actions at specific times or
                        intervals
                      </h4>
                    </div>

                    {/* Second Item */}
                    <div className="space-y-4">
                      <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl ">
                        02
                      </div>
                      <h2 className="text-xl px-2">Event-Triggered Actions</h2>
                      <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-lg">
                        Trigger workflows based on on-chain events like
                        governance proposals or token transfers
                      </h4>
                    </div>

                    {/* Third Item */}
                    <div className="space-y-4">
                      <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl ">
                        03
                      </div>
                      <h2 className="text-xl px-2">
                        Condition-Based Processes
                      </h2>
                      <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-lg">
                        Execute tasks when specific conditions are met, such as
                        price thresholds or liquidity levels
                      </h4>
                    </div>
                  </div>
                </div>

                <img
                  src={choose}
                  alt={""}
                  className="sm:w-[100px] w-[100px] lg:w-[20%] md:w-[10%] absolute right-0"
                />
              </div>
            </div>
          </div>

          <div className=" w-[90%] mx-auto lg:mt-40 md:mt-40 mt-20 sm:mt-20">
            {/* Content container */}

            {/* Title with bottom border effect */}
            <h1 className="text-4xl md:text-6xl text-white  pb-2 text-center leading-50">
              Why EigenLayer Matters?
            </h1>

            {/* Subtitle in a dark glass-like container */}

            <div className="bg-[#141414] rounded-lg px-6 py-3 border border-[#FFFFFF] mx-auto mt-8 min-w-min lg:w-[650px] md:w-[650px] sm:w-[400px]">
              <h4 className="text-[#A2A2A2] text-lg md:text-base text-center ">
                EigenLayer's AVS provides the backbone of TriggerX's security,
                enabling
              </h4>
            </div>
          </div>
          <div className="w-[90%] mx-auto lg:mt-40 md:mt-40 mt-20 sm:mt-20 flex justify-between relative sm:flex-col flex-col md:flex-row lg:flex-row items-center ">
            {/* Left Column */}
            <div className="flex justify-between gap-[200px] flex-col relative">
              {/* Line connecting to top box */}
              {/* <div className="absolute top-[25%] right-[-100px] flex items-center">
            <div className="w-2 h-2 bg-white transform rotate-45"></div>

            <div className="w-[100px] h-[2px] bg-white"></div>
          </div> */}
              <div className="relative text-white p-8 lg:max-w-sm md:max-w-sm sm:max-w-xs max-w-xs mx-auto group">
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white rounded-tl-md transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white rounded-br-md transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-start justify-center rounded-full overflow-hidden ">
                      <img
                        src={honesty}
                        alt=""
                        className="transition-all duration-300 group-hover:rounded-lg  group-hover:rotate-90"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-[#FFFFFF] group-hover:to-[#BD72F7] group-hover:bg-clip-text group-hover:text-transparent">
                        Incentivized Honesty
                      </h3>
                      <h4 className="text-[#A2A2A2] mt-2 text-md">
                        Misbehaving keepers are penalized through slashing,
                        ensuring reliability.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Line connecting to bottom box */}
              {/* <div className="absolute bottom-[30%] right-[-100px] w-[100px] h-[2px] bg-[#C07AF6]"></div> */}

              <div className="bg-[#141414] text-white p-8 lg:max-w-sm md:max-w-sm sm:max-w-xs max-w-sm mx-auto rounded-[30px] sm:hidden hidden lg:block md:block">
                <div className="relative text-white p-8 max-w-sm mx-auto">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C07AF6] rounded-tl-md"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C07AF6] rounded-br-md"></div>
                  <div className="space-y-4">
                    <img src={avs} alt={""} />
                  </div>
                </div>
              </div>
            </div>

            {/* Center img */}
            <div className="lg:hidden md:hidden sm:block block">
              <img
                src={eigen}
                alt=""
                className="lg:w-[500px] md:w-[500px] sm:w-[180px] w-[180px] absolute right-0 left-[200px]"
              />
            </div>
            <div className="lg:block md:block sm:hidden hidden">
              <img src={eigen} alt="" className=" w-[500px] " />
            </div>

            {/* Right Column */}
            <div className="flex justify-center lg:gap-[50px]  md:gap-[50px]  sm:gap-[20px] gap-[20px] flex-col relative ">
              {/* Line connecting to top box */}
              {/* Line connecting to top box with diamond */}
              {/* <div className="absolute top-[25%] left-[-100px] flex items-center flex-row-reverse">
            <div className="w-[100px] h-[2px] bg-white"></div>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </div> */}

              <div className="relative text-white p-8 lg:max-w-sm md:max-w-sm sm:max-w-xs max-w-xs mx-auto group">
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white rounded-tl-md transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white rounded-br-md transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="group flex items-center justify-center rounded-full">
                      <img
                        src={security}
                        alt=""
                        className="transform group-hover:scale-x-[-1] transition-transform duration-300"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-[#FFFFFF] group-hover:to-[#F8FF7C] group-hover:bg-clip-text group-hover:text-transparent">
                        Shared Security
                      </h3>
                      <h4 className="text-[#A2A2A2] mt-2 text-md">
                        Operators leverage EigenLayer's crypto-economic
                        guarantees
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Line connecting to bottom box */}
              {/* <div className="absolute bottom-[30%] left-[-100px] flex items-center flex-row-reverse">
            <div className="w-[100px] h-[2px] bg-white"></div>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </div> */}

              <div className="relative text-white p-8 lg:max-w-sm md:max-w-sm sm:max-w-xs max-w-xs mx-auto group">
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white rounded-tl-md transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white rounded-br-md transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center rounded-full group">
                      <img
                        src={validation}
                        alt={""}
                        className="transform group-hover:scale-y-[-1] transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-[#FFFFFF] group-hover:to-[#68FF9F] group-hover:bg-clip-text group-hover:text-transparent">
                        Decentralized Validations
                      </h3>
                      <h4 className="text-[#A2A2A2] mt-2 text-md">
                        Tasks are verified by a distributed network of keepers
                        using AVS mechanisms
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[90%] mx-auto lg:mt-40 md:mt-40 mt-20 sm:mt-20">
            {/* Content container */}

            {/* Title with bottom border effect */}
            <h1 className="text-4xl md:text-6xl text-white  pb-2 text-center ">
              Who is TriggerX For?
            </h1>
            <div>
              <h4 className="text-lg md:text-md text-[#A2A2A2] text-center mt-8">
                Whether you're a dApp developer, DeFi protocol creator, or
                enterprise innovator,
              </h4>
              <h4 className="text-lg md:text-md text-[#A2A2A2]   text-center">
                {" "}
                TriggerX empowers you to automate tasks with ease and
                confidence.
              </h4>
            </div>

            {/* Subtitle in a dark glass-like container */}

            <div className=" rounded-lg px-6 py-3 border border-[#FFFFFF] mx-auto mt-8 min-w-min w-[250px] bg-[#141414]">
              <h4 className="text-[#A2A2A2] text-lg md:text-base text-center">
                Use cases include
              </h4>
            </div>
            <div className="lg:mt-20 md:mt-20 mt-20 sm:mt-20">
              {" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto ">
                <div className="relative flex items-center gap-3 px-4 pb-8 pt-4 rounded-xl">
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center gap-8 ">
                    <img src={honesty} alt={""} width={30} />
                    <h3 className="text-xl">Automated API calls</h3>
                  </div>
                </div>
                <div className="relative flex items-center gap-3 px-4 pb-8 pt-4 rounded-xl">
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center gap-8 ">
                    <img src={validation} alt={""} width={30} />
                    <h3 className="text-xl">Governance actions</h3>
                  </div>
                </div>
                <div className="relative flex items-center gap-3 px-4 pb-8 pt-4 rounded-xl">
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center gap-8 ">
                    <img src={security} alt={""} width={30} />
                    <h3 className="text-xl">Liquidity management</h3>
                  </div>
                </div>

                <div className="relative flex items-center gap-3 px-4 pb-8 pt-4 rounded-xl">
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center gap-8 ">
                    <img src={honesty} alt={""} width={30} />
                    <h3 className="text-xl">Token burns or mints</h3>
                  </div>
                </div>
              </div>
              <div className=" max-w-[30rem] mx-auto mt-5">
                <div className="relative flex items-center gap-3 px-4 pb-8 pt-4  rounded-xl">
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center gap-8 ">
                    <img src={security} alt={""} width={30} />
                    <h3 className="text-xl">User notifications and more !</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[90%] mx-auto lg:mt-40 md:mt-40 mt-20 sm:mt-20">
            {/* Get Started Section */}
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl text-white  pb-2 text-center ">
                Who is TriggerX For?
              </h1>

              <div className="bg-[#141414] rounded-lg px-6 py-3 border border-[#FFFFFF] mx-auto mt-8 min-w-min lg:w-[600px] md:w-[600px] sm:w-[400px]">
                <h4 className="text-[#A2A2A2] text-md md:text-base text-center">
                  TriggerX makes automation seamless, secure, and scalable
                </h4>
              </div>
              <div className="lg:mt-20 md:mt-20 mt-20 sm:mt-20">
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
                  <div className="bg-[#141414] rounded-2xl border border-white/10 hover:bg-white hover:text-black sm:flex flex lg:block md:block">
                    <div className="  ">
                      <img src={submit} alt={""} />
                    </div>
                    <div className="p-6 max-w-[16rem]">
                      <h3 className="text-2xl mb-3 text-start">Submit Tasks</h3>
                      <h4 className=" text-md text-start tracking-wider text-[#A2A2A2]">
                        Use our intuitive interface to solve your automation
                        needs
                      </h4>
                    </div>
                  </div>

                  <div className="bg-[#141414]  rounded-2xl border border-[#3C3C3C] hover:bg-white hover:text-black sm:flex flex lg:block md:block">
                    <div className="  ">
                      <img src={track} alt={""} />
                    </div>
                    <div className="p-6 max-w-[16rem]">
                      <h3 className="text-2xl mb-3 text-start">
                        Track Progress
                      </h3>
                      <h4 className=" text-md text-start tracking-wider text-[#A2A2A2]">
                        Stay updated with real-time dashboards and alerts
                      </h4>
                    </div>
                  </div>

                  <div className="bg-[#141414] rounded-2xl border border-white/10 hover:bg-white hover:text-black sm:flex flex lg:block md:block">
                    <div className="  ">
                      <img src={scale} alt={""} />
                    </div>
                    <div className="p-6 max-w-[16rem]">
                      <h3 className="text-2xl mb-3 text-start">
                        Scale with Confidence
                      </h3>
                      <h4 className=" text-md text-start tracking-wider text-[#A2A2A2]">
                        Expand your automation capabilities as your project
                        grows
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
