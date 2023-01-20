import { useEffect, useState } from "react";
import "./styles.css";
function RandomQuote() {
  const [quote, quoteSetter] = useState("");
  const [isFalse, falseSetter] = useState(false);
  let [jokeCount, jokeCountSetter] = useState(1);
  const [colNum, colNumSetter] = useState(0);

  useEffect(() => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    })
      .then((rs) => rs.json())
      .then((data) => {
        quoteSetter(data);
        falseSetter(false);
      });
  }, [isFalse]);

  // console.log(quote.joke)

  function newTextHandler() {
    falseSetter(true);
    jokeCountSetter((jokeCount += 1));
    colNumSetter(Math.floor(Math.random() * 10));
  }

  let colclass = `col${colNum}`;
  let bgclass = `bg${colNum}`;
  return (
    <div id="body" className={bgclass}>
      <div id="quote-box">
        <div id="text" className={colclass}>
          <p>{quote.joke}</p>
        </div>
        <div id="author" className={colclass}>
          - Joke Number : {jokeCount}
        </div>
        <div id="links">
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            className={bgclass}
          >
            Tweet it
          </a>
          <button onClick={newTextHandler} id="new-quote" className={bgclass}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;
