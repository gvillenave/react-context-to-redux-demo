interface IBoxProps {
  color: string;
  switchSides: () => void;
}

const Box = ({ color, switchSides }: IBoxProps) => {
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
