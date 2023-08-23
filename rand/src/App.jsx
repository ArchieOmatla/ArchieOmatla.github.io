import { useState } from "react";
import { createRoot } from "react-dom/client";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
import { BsDash } from "react-icons/bs";

const QUOTES = [
  { quote: "Stop crying", author: "Archibold" },
  { quote: "Why you crying", author: "Archie" },
  { quote: "Cry later when i am not around", author: "Mr.Thula" },
  { quote: "Seriously stop crying", author: "Omatla" },
  { quote: "I am not a shoulder to cry on", author: "Sir Archibold" },
  { quote: "Should I call your mum", author: "Mr. Archibold" },
  { quote: "Maybe your dad could comfort you", author: "Mr Omatla" },
  { quote: "Ok I am leaving", author: "Sir Archie of House Thula" },
  { quote: "It has been nice knowing you", author: "Sir Archie" },
  { quote: "Maybe a glass of water", author: "Sir Omatla" },
  { quote: "Call me when you done crying", author: "Blackman Thula" },
];

const App = () => {
  const [index, randNum] = useState(Math.floor(Math.random() * 9));
  document.querySelector("body").className = "scheme" + index;

  function handleClick() {
    randNum(Math.floor(Math.random() * 9));
    let strg = "scheme" + index;
    document.querySelector("body").className = "";
    document.querySelector("body").classList.add(strg);
  }

  return (
    <div>
      <blockquote>
        <p id="text">
          <FaQuoteLeft />
          {QUOTES[index].quote}
        </p>
        <cite id="author">
          <BsDash />
          {QUOTES[index].author}
        </cite>
      </blockquote>

      <div className="flexclass">
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          <FaTwitter className={"scheme" + index} />
        </a>
        <MyButton onClick={handleClick} />
      </div>
    </div>
  );
};

const MyButton = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      New Quote
    </button>
  );
};

const container = document.getElementById("quote-box");
const root = createRoot(container);
root.render(<App />);
