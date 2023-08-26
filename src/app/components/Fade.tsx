import { ReactNode } from "react";
import { useEffect, useState } from "react";

export default function Fade({
  children
}: {
  children: ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      <div
        className={`${
          isVisible
            ? "opacity-100 transform translate-y-0 transition-opacity transition-transform"
            : "opacity-0 transform translate-y-4 transition-opacity transition-transform"
        } duration-500 ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
};