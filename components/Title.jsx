import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const all = ["WE CONNECT ARTISTS WITH BRAND SPONSORS."];

function Type() {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 10); // Adjust the initial delay as needed (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  return startTyping ? (
    <Typewriter
      options={{
        strings: all,
        autoStart: true,
        loop: true,
        delay: 65,
        deleteSpeed: 80,
        pauseFor: 8000,
        cursor: "|",
      }}
    />
  ) : null;
}

export default Type;
