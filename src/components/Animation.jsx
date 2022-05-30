import { useSpring, animated } from "react-spring";
import { useState } from "react";
export function Animation() {
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 1000,
    delay: 500,
    onRest: () => set(!flip),
  });

  return <animated.div>{number.to((n) => n.toFixed(2))}</animated.div>;
}
