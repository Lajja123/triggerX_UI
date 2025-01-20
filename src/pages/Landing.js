import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "+=200",
        scrub: 0.5,
      },
    });

    // Animate logo
    tl.to(logoRef.current, {
      scale: 0.5,
      x: "-30vw",
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    // Animate nav items
    tl.to(
      navItemsRef.current,
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );

    // Animate hero image
    tl.to(
      heroImageRef.current,
      {
        scale: 0.3,
        y: "-50%",
        x: "35vw",
        opacity: 0.8,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <header ref={headerRef} className="fixed top-0 w-full bg-black z-50 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div ref={logoRef} className="text-white text-4xl font-bold">
            TRIGGERX
          </div>

          <nav ref={navItemsRef} className="opacity-0 translate-x-full">
            <div className="flex gap-8 text-white">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
              <a href="#" className="hover:text-gray-300">
                Create Job
              </a>
              <a href="#" className="hover:text-gray-300">
                Dashboard
              </a>
              <button className="bg-[#e8ff00] text-black px-4 py-2 rounded-full">
                Connect Wallet
              </button>
            </div>
          </nav>
        </div>

        <div
          ref={heroImageRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src="/path-to-your-crystal-image.png"
            alt="Crystal"
            className="w-64 h-64 object-contain"
          />
        </div>
      </header>

      <main className="pt-32">
        <div className="max-w-4xl mx-auto text-white text-center">
          <h1 className="text-6xl font-bold mb-8">
            Next-Gen Blockchain Automation
          </h1>
          <div className="flex justify-center gap-4 mb-8">
            <button className="bg-white text-black px-6 py-2 rounded-full">
              Signless
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full">
              Secure
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full">
              RiskFree
            </button>
          </div>
          <p className="text-gray-400 mb-8">
            TriggerX is the future of blockchain automation—bringing ease,
            trust, and innovation to developers, dApps, and enterprises. Powered
            by EigenLayer's AVS (Actively Validated Services), we deliver
            reliable and secure automation across multi-chain ecosystems.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-full">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
