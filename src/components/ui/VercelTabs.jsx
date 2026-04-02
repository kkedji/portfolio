import React, { useState, useRef, useEffect } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = React.forwardRef(
  ({ className, tabs, activeTab, onTabChange, ...props }, ref) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverStyle, setHoverStyle] = useState({});
    const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" });
    const tabRefs = useRef([]);

    useEffect(() => {
      if (activeTab) {
        const idx = tabs.findIndex((t) => t.id === activeTab);
        if (idx !== -1) setActiveIndex(idx);
      }
    }, [activeTab, tabs]);

    useEffect(() => {
      if (hoveredIndex !== null) {
        const hoveredElement = tabRefs.current[hoveredIndex];
        if (hoveredElement) {
          const { offsetLeft, offsetWidth } = hoveredElement;
          setHoverStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          });
        }
      }
    }, [hoveredIndex]);

    useEffect(() => {
      const activeElement = tabRefs.current[activeIndex];
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }, [activeIndex]);

    useEffect(() => {
      requestAnimationFrame(() => {
        const firstElement = tabRefs.current[0];
        if (firstElement) {
          const { offsetLeft, offsetWidth } = firstElement;
          setActiveStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          });
        }
      });
    }, []);

    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        <div className="relative">
          {/* Hover Highlight */}
          <div
            className="absolute h-[30px] transition-all duration-300 ease-out rounded-[6px] flex items-center"
            style={{
              ...hoverStyle,
              backgroundColor: "rgba(14, 15, 17, 0.08)",
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
          />

          {/* Active Indicator */}
          <div
            className="absolute bottom-[-6px] h-[2px] transition-all duration-300 ease-out"
            style={{
              ...activeStyle,
              backgroundColor: "#0284c7",
            }}
          />

          {/* Tabs */}
          <div className="relative flex space-x-[6px] items-center">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                ref={(el) => (tabRefs.current[index] = el)}
                className={cn(
                  "px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px]",
                  index === activeIndex
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  setActiveIndex(index);
                  onTabChange?.(tab.id);
                }}
              >
                <div className="text-sm font-medium leading-5 whitespace-nowrap flex items-center justify-center h-full">
                  {tab.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);
Tabs.displayName = "Tabs";

export { Tabs };
