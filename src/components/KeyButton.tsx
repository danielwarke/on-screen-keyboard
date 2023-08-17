import { KeyConfig } from "../keys.ts";
import { FC, useMemo } from "preact/compat";

interface KeyButtonProps {
  keyConfig: KeyConfig;
  isShift: boolean;
  isCaps: boolean;
  onKeyClick: (value: string, special?: boolean) => void;
}

const KeyButton: FC<KeyButtonProps> = ({
  keyConfig,
  isShift,
  isCaps,
  onKeyClick,
}) => {
  const keyValue = useMemo(() => {
    if (typeof keyConfig === "string") {
      return isShift || isCaps ? keyConfig.toUpperCase() : keyConfig;
    }

    return isShift && !keyConfig.special
      ? keyConfig.shiftValue
      : keyConfig.value;
  }, [keyConfig, isShift, isCaps]);

  function clickHandler() {
    onKeyClick(
      String(keyValue),
      typeof keyConfig === "object" && keyConfig.special,
    );
  }

  return (
    <button className="key-button" onClick={clickHandler}>
      {keyValue}
    </button>
  );
};

export default KeyButton;
