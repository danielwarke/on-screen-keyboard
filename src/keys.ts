export type KeyConfig =
  | string
  | { value: string | number; shiftValue?: string; special?: boolean };

export const keys: KeyConfig[][] = [
  [
    {
      value: "`",
      shiftValue: "~",
    },
    {
      value: 1,
      shiftValue: "!",
    },
    {
      value: 2,
      shiftValue: "@",
    },
    {
      value: 3,
      shiftValue: "#",
    },
    {
      value: 4,
      shiftValue: "$",
    },
    {
      value: 5,
      shiftValue: "%",
    },
    {
      value: 6,
      shiftValue: "^",
    },
    {
      value: 7,
      shiftValue: "&",
    },
    {
      value: 8,
      shiftValue: "*",
    },
    {
      value: 9,
      shiftValue: "(",
    },
    {
      value: 0,
      shiftValue: ")",
    },
    { value: "-", shiftValue: "_" },
    {
      value: "=",
      shiftValue: "+",
    },
    {
      value: "back",
      special: true,
    },
  ],
  [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    { value: "[", shiftValue: "{" },
    { value: "]", shiftValue: "}" },
  ],
  [
    { value: "caps", special: true },
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    { value: ";", shiftValue: ":" },
    {
      value: "'",
      shiftValue: '"',
    },
  ],
  [
    { value: "shift", special: true },
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    {
      value: ",",
      shiftValue: "<",
    },
    {
      value: ".",
      shiftValue: ">",
    },
    {
      value: "/",
      shiftValue: "?",
    },
  ],
];
