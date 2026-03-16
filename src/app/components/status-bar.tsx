"use client";

import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-4 text-[10px] text-muted font-mono border border-border px-4 py-2 mt-14 w-fit">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        ONLINE
      </span>
      <span className="text-border">|</span>
      <span>SYS {time}</span>
      <span className="text-border">|</span>
      <span>LOCATION: SF_BAY</span>
      <span className="text-border">|</span>
      <span>STATUS: BUILDING</span>
    </div>
  );
}
