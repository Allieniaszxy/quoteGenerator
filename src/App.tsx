import React, { useState } from "react";

const App = () => {
  const quotes = [
    {
      quote:
        "The best way to find yourself is to lose yourself in the service of others",
      person: "Mahatma Gandhi",
    },
    {
      quote: "Imagination is more important than knowledge",
      person: "Albert Einstein",
    },
    {
      quote:
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      person: "Winston Churchill",
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt",
    },
    {
      quote: "Act as if what you do makes a difference. It does.",
      person: "William James",
    },
    {
      quote:
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      person: "Zig Ziglar",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const changeQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[random]);
  };

  return (
    <div className="flex items-center justify-center h-[100vh] bg-gray-100">
      <div className="flex flex-col items-center justify-center w-[550px] h-[450px] bg-cyan-100 px-4 py-8 rounded-lg shadow-md">
        <h1 className="text-white bg-black rounded-2xl border py-3 px-4 mb-8 text-3xl">
          Quote Generator
        </h1>
        <div className="my-5">
          <p className="text-2xl text-center">{currentQuote.quote}</p>
        </div>
        <div>
          <p className="text-red-500 font-semibold text-3xl">
            {currentQuote.person}
          </p>
        </div>
        <div className="mt-6">
          <button
            onClick={changeQuote}
            className="py-2 px-3 bg-blue-400 rounded hover:bg-blue-500 transition"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
