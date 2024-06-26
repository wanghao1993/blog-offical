"use client";

import useScroll from "@/lib/useScrollHooks";
import { useEffect } from "react";

export default function ToTop() {
  const { scrollPosition } = useScroll();

  useEffect(() => {
    console.log(scrollPosition.y);
  }, [scrollPosition.y]);
  return (
    scrollPosition.y > 200 && (
      <div
        className="fixed right-10 bottom-10 z-10"
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      >
        gogo
      </div>
    )
  );
}
