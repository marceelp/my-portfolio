import { useState, useEffect } from "react";

const useTextAnimation = (initialText, delay = 0) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setText((prevText) => {
          const newText = prevText
            .split("")
            .map((letter, i) => {
              if (i < iterations) return initialText[i];
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          return newText;
        });

        if (iterations >= text.length) return text;

        iterations += 1 / 3;
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [initialText]);

  return text;
};

export default useTextAnimation;
