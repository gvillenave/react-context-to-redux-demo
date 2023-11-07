import { useUiContext } from '../context/UiContext';

import { Box } from './Box';

interface IColumnProps {
  side: 'left' | 'right';
  boxSwitchSidesHandler: () => void;
}

const Column = ({ side, boxSwitchSidesHandler }: IColumnProps) => {
  const uiContext = useUiContext();

  const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const boxes = Array.from({ length: (side === 'left' ? uiContext.leftBoxes : uiContext.rightBoxes) }, (_, i) => 
    <Box key={i} color={getRandomColor()} switchSides={boxSwitchSidesHandler} />
  );
  return <div className="column">{boxes}</div>;
};

export { Column };
