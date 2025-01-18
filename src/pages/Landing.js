import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import logo from "../assets/logo.svg";
import landing from "../assets/landing.svg";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const landingImageRef = useRef(null);
  const logoRef = useRef(null);
  const mainLogoRef = useRef(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const navContainerRef = useRef(null);
  const navigationRef = useRef(null);

  const isActiveRoute = (path) => location.pathname === path;

  useEffect(() => {
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

    // Create the scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200",
        scrub: true,
      },
    });

    // Animate the logo
    tl.to(mainLogoRef.current, {
      width: "200px",
      x: -700,
      y: -130,
      ease: "power1.out",
      duration: 1,
    });

    // Animate the navigation to center
    tl.to(
      navigationRef.current,
      {
        x: "200%",
        y: 0,

        scale: 0.85,
        ease: "power1.out",
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
        y: -400,
        scale: 0.6,
        ease: "power1.out",
        duration: 1,
      },
      "<"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[200vh] bg-black">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0">
        <div ref={headerRef} className="w-full bg-black/80 backdrop-blur-sm ">
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
              <div className="flex items-center bg-[#181818F0] rounded-xl p-1">
                <button
                  onClick={() => navigate("/")}
                  className={`px-6 py-2 rounded-xl text-white text-sm transition-all
                    ${
                      isActiveRoute("/")
                        ? "bg-[#D9D9D924] border border-[#4B4A4A]"
                        : "hover:bg-[#D9D9D924] hover:border hover:border-[#4B4A4A]"
                    }`}
                >
                  Home
                </button>
                <button
                  onClick={() => navigate("/create-job")}
                  className={`px-6 py-2 rounded-xl text-white text-sm transition-all
                    ${
                      isActiveRoute("/create-job")
                        ? "bg-[#D9D9D924] border border-[#4B4A4A]"
                        : "hover:bg-[#D9D9D924] hover:border hover:border-[#4B4A4A]"
                    }`}
                >
                  Create Job
                </button>
                <button
                  onClick={() => navigate("/dashboard")}
                  className={`px-6 py-2 rounded-xl text-white text-sm transition-all
                    ${
                      isActiveRoute("/dashboard")
                        ? "bg-[#D9D9D924] border border-[#4B4A4A]"
                        : "hover:bg-[#D9D9D924] hover:border hover:border-[#4B4A4A]"
                    }`}
                >
                  Dashboard
                </button>
              </div>
            </div>

            {/* Connect Wallet */}
            <ConnectButton />
          </div>
        </div>

        {/* Hero Section with Animated Elements */}
        <div className="w-[70%] mx-auto flex my-[100px] items-center flex-col">
          <img
            ref={mainLogoRef}
            src={logo}
            alt="TriggerX Logo"
            className="w-full"
          />
          <div>
            <img
              ref={landingImageRef}
              src={landing}
              alt="Landing illustration"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
