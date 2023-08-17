import { KeyConfig } from "../keys.ts";
import { FC, useMemo } from "preact/compat";

interface KeyButtonProps {
  keyConfig: KeyConfig;
  isShift: boolean;
  isCaps: boolean;
  onClick: (value: string, special?: boolean) => void;
}

const KeyButton: FC<KeyButtonProps> = ({
  keyConfig,
  isShift,
  isCaps,
  onClick,
}) => {
  const keyValue = useMemo(() => {
    if (typeof keyConfig === "string") {
      return isShift || isCaps ? keyConfig.toUpperCase() : keyConfig;
    }

    return isShift && !keyConfig.special
      ? keyConfig.shiftValue
      : keyConfig.value;
  }, [keyConfig, isShift, isCaps]);

  return (
    <button
      className="key-button"
      onClick={() =>
        onClick(
          String(keyValue),
          typeof keyConfig === "object" && keyConfig.special,
        )
      }
    >
      {keyValue}
    </button>
  );
};

export default KeyButton;
