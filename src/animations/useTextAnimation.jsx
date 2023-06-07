import { useState, useEffect } from "react";

const useTextAnimation = (initialText) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;

    const interval = setInterval(() => {
      setText((prevText) => {
        const newText = prevText
          .split("")
          .map((letter, i) => {
            console.log(i, iterations);
            if (i < iterations) return initialText[i];
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        return newText;
      });

      iterations += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [initialText]);

  return text;
};

export default useTextAnimation;
