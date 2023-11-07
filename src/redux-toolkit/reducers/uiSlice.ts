import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isDarkMode: boolean;
  leftBoxes: number;
  rightBoxes: number;
}

const initialState: UiState = {
  isDarkMode: false,
  leftBoxes: 0,
  rightBoxes: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },

    addLeftBox(state) {
      state.leftBoxes += 1;
    },

    addRightBox(state) {
      state.rightBoxes += 1;
    },

    setLeftBoxes(state, action: PayloadAction<number>) {
      state.leftBoxes = action.payload;
    },

    setRightBoxes(state, action: PayloadAction<number>) {
      state.rightBoxes = action.payload;
    },

    moveLeftBoxToRight(state) {
      state.leftBoxes -= 1;
      state.rightBoxes += 1;
    },

    moveRightBoxToLeft(state) {
      state.leftBoxes += 1;
      state.rightBoxes -= 1;
    },
  },
});

export { uiSlice };
export const { toggleDarkMode, setLeftBoxes, setRightBoxes } = uiSlice.actions;
export default uiSlice.reducer;
