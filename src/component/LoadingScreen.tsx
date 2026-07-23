import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello, Welcome To My Portfolio/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed p-5 md:p-0 max-w-svw overflow-hidden inset-0 z-50 bg-slate-800 text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-h2 font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>
      <div className="w-50 h-0.5 bg-gray-800 rounded relative ">
        <div className=" w-[80%] h-full bg-cyan-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
