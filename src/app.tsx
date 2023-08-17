import { useRef, useState } from "preact/hooks";
import { keys } from "./keys.ts";
import KeyButton from "./components/KeyButton.tsx";
import "./app.css";

export function App() {
  const initialPress = useRef(true);
  const [input, setInput] = useState("Click a key to start entering text");
  const [isShift, setIsShift] = useState(false);
  const [isCaps, setIsCaps] = useState(false);

  function onKeyClick(value: string, special?: boolean) {
    if (special) {
      switch (value) {
        case "shift":
          setIsShift((currIsShift) => !currIsShift);
          break;
        case "caps":
          setIsCaps((currIsCaps) => !currIsCaps);
          break;
        case "back":
          if (initialPress.current) {
            setInput("");
            initialPress.current = false;
          } else {
            setInput((currInput) =>
              currInput.substring(0, currInput.length - 1),
            );
          }
      }

      return;
    }

    if (initialPress.current) {
      setInput(value);
      initialPress.current = false;
    } else {
      setInput((currInput) => currInput + value);
    }

    if (isShift) {
      setIsShift(false);
    }
  }

  function onSpaceClick() {
    onKeyClick(" ");
  }

  return (
    <div className="container">
      <h2 className="user-input">
        {input}
        <span className="blinking-cursor">|</span>
      </h2>
      <div>
        {keys.map((row, rowIdx) => (
          <div key={rowIdx}>
            {row.map((keyConfig, keyIdx) => (
              <KeyButton
                key={keyIdx}
                keyConfig={keyConfig}
                isShift={isShift}
                isCaps={isCaps}
                onKeyClick={onKeyClick}
              />
            ))}
          </div>
        ))}
        <button
          className="key-button space-bar"
          onClick={onSpaceClick}
        ></button>
      </div>
    </div>
  );
}
