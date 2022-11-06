import React, { useEffect, useState } from "react";
import classes from "./Developer.module.css";

function Developer() {
  const frontEnd: string = "i am a front-end developer";
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval((): void => {
      if (index === frontEnd.length) {
        setIndex(0);
      } else {
        setIndex((prev: number): number => ++prev);
      }
    }, 100);
    return (): void => clearInterval(timer);
  }, [index, frontEnd]);

  return <p className={classes.dev}>{frontEnd.slice(0, index)}</p>;
}

export default Developer;