import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const preloaderRef = useRef(null);
  const progressTextRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    let progress = 0;
    const duration = 2000; // 2 seconds
    const interval = 10; // Update every 10ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const updateProgress = () => {
      progress += increment;
      if (progress > 100) progress = 100;

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }
    };

    const timer = setInterval(() => {
      updateProgress();
      if (progress >= 100) clearInterval(timer);
    }, interval);

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
      className="fixed bottom-0 pb-10 z-50 flex flex-col items-center justify-end bg-black h-screen w-full"
    >
      <div className="w-full max-w-8xl px-8">
        {/* Percentage Text with Animation */}
        <div
          className="mb-2 animate-slide-up"
          style={{
            animationDuration: "1s",
            animationTimingFunction: "ease-out",
          }}
        >
          <div
            ref={progressTextRef}
            className="text-white text-8xl font-ligher"
            style={{ fontFamily: "ActayRegular" }}
          >
            0%
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-12 border border-[#343434] rounded-md overflow-hidden z-10">
          <div
            ref={progressBarRef}
            className="h-full bg-[#343434] transition-all duration-[10ms] ease-out"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
