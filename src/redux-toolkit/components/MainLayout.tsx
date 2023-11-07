import { useAppDispatch, useAppSelector } from "../stores/store";
import { Column } from "./Column";

const MainLayout = () => {
  const { isDarkMode } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const toggleDarkMode = () => dispatch({ type: "ui/toggleDarkMode" });
  const addLeftBox = () => dispatch({ type: "ui/addLeftBox" });
  const addRightBox = () => dispatch({ type: "ui/addRightBox" });
  const moveLeftBoxToRight = () => dispatch({ type: "ui/moveLeftBoxToRight" });
  const moveRightBoxToLeft = () => dispatch({ type: "ui/moveRightBoxToLeft" });

  return (
    <div id="main-layout" className={isDarkMode ? "dark" : "light"}>
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
            <Column side="left" />
          </div>
          <div className="column right">
            <div>
              <button onClick={addRightBox}>Add Right Box</button>
              <button onClick={moveRightBoxToLeft}>Move Right Box To Left</button>
            </div>
            <Column side="right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainLayout };
