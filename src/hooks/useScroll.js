import { useEffect } from "react";
import { useMotionValue, useTransform } from "framer-motion";

// Custom hook to apply scroll-based color effect
export const useScrollColorEffect = (start, end, fromColor, toColor) => {
  // Notice lowercase 'use'
  const scrollY = useMotionValue(0);

  // Create a dynamic color transition based on scroll range
  const color = useTransform(
    scrollY,
    [start, end], // Scroll range for this specific text part
    [fromColor, toColor] // Transition from start color to end color
  );

  // Set up the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY); // Update scrollY on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener on unmount
    };
  }, [scrollY]);

  return color;
};
