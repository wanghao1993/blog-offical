import { debounce } from "radash";
import { useState, useEffect } from "react";

function useScroll() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    requestIdleCallback(
      () => {
        () => {
          setScrollPosition({
            x: window.scrollX,
            y: window.scrollY,
          });
          setIsBottom(
            window.innerHeight + document.documentElement.scrollTop >=
              document.documentElement.offsetHeight
          );
        };
      },
      {
        timeout: 1000,
      }
    );

    // 添加滚动事件监听器
    // window.addEventListener("scroll", handleScroll);
    // // 组件卸载时移除监听器
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollPosition, isBottom };
}

export default useScroll;
