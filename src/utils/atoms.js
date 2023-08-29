import { atom } from "jotai";

export const turnsAtom = atom(0);
export const themeAtom = atom("");
export const levelAtom = atom("");
export const completedAtom = atom(false);
export const matchedAtom = atom([]);
export const flippedAtom = atom({ flippedOne: "", flippedTwo: "" });
