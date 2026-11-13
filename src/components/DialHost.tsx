"use client";

import { DialRoot } from "dialkit";
import { useEffect, useState } from "react";

const KEY = "dial-panel";

/**
 * Shows the DialKit design panel. Always on while developing. On the live site it stays
 * hidden from visitors; open any page with ?dial=1 to switch it on in your own browser
 * (it is remembered), and ?dial=0 to switch it off again.
 */
export default function DialHost() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const dev = process.env.NODE_ENV !== "production";
    const flag = new URLSearchParams(window.location.search).get("dial");
    try {
      if (flag === "1") localStorage.setItem(KEY, "1");
      if (flag === "0") localStorage.removeItem(KEY);
      setOn(dev || localStorage.getItem(KEY) === "1");
    } catch {
      setOn(dev || flag === "1");
    }
  }, []);

  return on ? <DialRoot productionEnabled /> : null;
}
