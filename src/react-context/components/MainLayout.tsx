import { useUiContext } from "../context/UiContext";

import { Column } from "./Column";

interface IMainLayoutProps {
  toggleDarkMode: () => void;
  addLeftBox: () => void;
  addRightBox: () => void;
  moveLeftBoxToRight: () => void;
  moveRightBoxToLeft: () => void;
}

const MainLayout = ({ toggleDarkMode, addLeftBox, addRightBox, moveLeftBoxToRight, moveRightBoxToLeft }: IMainLayoutProps) => {
  const uiContext = useUiContext();

  return (
    <div id="main-layout" className={uiContext.isDarkMode ? "dark" : "light"}>
      <div>
        <div>
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
        <div className="container">
          <div className="column left">
            <div>
              <button onClick={addLeftBox}>Add Left Box</button>
              <button onClick={moveLeftBoxToRight}>Move Left Box To Right</button>
            </div>
            <Column side="left" boxSwitchSidesHandler={moveLeftBoxToRight} />
          </div>
          <div className="column right">
            <div>
              <button onClick={addRightBox}>Add Right Box</button>
              <button onClick={moveRightBoxToLeft}>Move Right Box To Left</button>
            </div>
            <Column side="right" boxSwitchSidesHandler={moveRightBoxToLeft} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainLayout };
