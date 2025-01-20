import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const preloaderRef = useRef(null);
  const progressTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the loading text from 0 to 100
    tl.to(progressTextRef.current, {
      textContent: "100%",
      duration: 2,
      snap: { textContent: 1 },
      stagger: 1,
      ease: "power1.inOut",
    });

    // Fade out the preloader
    tl.to(preloaderRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
    });

    // Optional: Remove preloader from DOM after animation
    tl.add(() => {
      if (preloaderRef.current) {
        preloaderRef.current.style.display = "none";
      }
    });
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <div className="mb-4">
          <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-white"></div>
        </div>
        <span ref={progressTextRef} className="text-4xl font-bold text-white">
          0%
        </span>
      </div>
    </div>
  );
};

export default Preloader;
