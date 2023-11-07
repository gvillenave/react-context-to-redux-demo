import { createContext, useContext } from 'react';

export type UiState = {
  isDarkMode: boolean;
  leftBoxes: number;
  rightBoxes: number;
};

export const initialUiState = {
  isDarkMode: false,
  leftBoxes: 0,
  rightBoxes: 0,
};

export const UiContext = createContext<UiState>(initialUiState);

export const useUiContext = () => useContext(UiContext);
