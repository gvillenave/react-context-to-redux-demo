import { useAppDispatch } from "../stores/store";

interface IBoxProps {
  color: string;
  side: "left" | "right";
}

const Box = ({ color, side }: IBoxProps) => {
  const dispatch = useAppDispatch();

  const switchSides = () => {
    if (side === "left") {
      dispatch({ type: "ui/moveLeftBoxToRight" });
    } else {
      dispatch({ type: "ui/moveRightBoxToLeft" });
    }
  };

  return (
    <div
      className="box"
      style={{
        backgroundColor: color,
      }}
    >
      <button onClick={switchSides}>Switch</button>
    </div>
  );
};

export { Box };
