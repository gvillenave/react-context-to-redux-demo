import { useState } from 'react';

import { UiContext, UiState, initialUiState } from './context/UiContext';

import { MainLayout } from './components/MainLayout';

import './App.css';

function App() {
  const [uiState, setUiState] = useState<UiState>(initialUiState);

  const toggleDarkMode = () => {
    setUiState({
      ...uiState,
      isDarkMode: !uiState.isDarkMode,
    });
  };

  const addLeftBox = () => {
    setUiState({
      ...uiState,
      leftBoxes: uiState.leftBoxes + 1,
    });
  };

  const addRightBox = () => {
    setUiState({
      ...uiState,
      rightBoxes: uiState.rightBoxes + 1,
    });
  };

  const moveLeftBoxToRight = () => {
    setUiState({
      ...uiState,
      leftBoxes: uiState.leftBoxes - 1,
      rightBoxes: uiState.rightBoxes + 1,
    });
  };

  const moveRightBoxToLeft = () => {
    setUiState({
      ...uiState,
      leftBoxes: uiState.leftBoxes + 1,
      rightBoxes: uiState.rightBoxes - 1,
    });
  };

  return (
    <UiContext.Provider value={uiState}>
      <MainLayout
        toggleDarkMode={toggleDarkMode}
        addLeftBox={addLeftBox}
        addRightBox={addRightBox}
        moveLeftBoxToRight={moveLeftBoxToRight}
        moveRightBoxToLeft={moveRightBoxToLeft}
      />
    </UiContext.Provider>
  );
}

export default App;
