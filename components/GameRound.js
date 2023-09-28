import BracketValue from "./BracketValue";

const GameRound = ({ first, second }) => {
  return (
    <div className="w-full flex justify-center ">
      <div className="flex justify-around w-[80%] items-center">
        <BracketValue value={first} />
        <p>vs</p>
        <BracketValue value={second} />
      </div>
    </div>
  );
};

export default GameRound;
