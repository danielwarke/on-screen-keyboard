import { useState } from "preact/hooks";
import { keys } from "./keys.ts";
import KeyButton from "./components/KeyButton.tsx";
import "./app.css";

export function App() {
  const [input, setInput] = useState("");
  const [isShift, setIsShift] = useState(false);
  const [isCaps, setIsCaps] = useState(false);

  function onKeyClick(value: string, special?: boolean) {
    if (special) {
      switch (value) {
        case "shift":
          setIsShift((val) => !val);
          break;
        case "caps":
          setIsCaps((val) => !val);
          break;
        case "back":
          setInput((i) => i.substring(0, i.length - 1));
      }

      return;
    }

    setInput((i) => i + value);
    if (isShift) {
      setIsShift(false);
    }
  }

  return (
    <div className="container">
      <h2 className="user-input">
        {input || "Click a key to start entering text"}
      </h2>
      <div>
        {keys.map((row, idx) => (
          <div key={idx}>
            {row.map((keyConfig, keyIdx) => {
              return (
                <KeyButton
                  key={keyIdx}
                  keyConfig={keyConfig}
                  isShift={isShift}
                  isCaps={isCaps}
                  onClick={onKeyClick}
                />
              );
            })}
          </div>
        ))}
        <button
          className="key-button space-bar"
          onClick={() => setInput((i) => i + " ")}
        ></button>
      </div>
    </div>
  );
}
