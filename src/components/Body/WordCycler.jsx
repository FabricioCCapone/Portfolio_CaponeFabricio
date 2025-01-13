import React, { useEffect, useState } from "react";

const WordCycler = ({ words = ['I turn ideas into reality with code.'], typingSpeed = 150, deletingSpeed = 150, delayBetweenWords = 2000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return <div>{displayText}</div>;
};

export default WordCycler;

