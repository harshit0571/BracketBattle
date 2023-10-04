import BracketValue from "./BracketValue";

const GameRound = ({ first, second, setWinner, setNumber, Number }) => {
  return (
    <div className="w-full flex justify-center ">
      <div className="flex justify-around w-[80%] items-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            setWinner((winner) => [...winner, first]);
            setNumber(Number + 2);
          }}
        >
          <BracketValue value={first} />
        </div>
        <p>vs</p>
        <div
          className="cursor-pointer"
          onClick={() => {
            setWinner((winner) => [...winner, second]);
            setNumber(Number + 2);
          }}
        >
          <BracketValue value={second} />
        </div>
      </div>
    </div>
  );
};

export default GameRound;
