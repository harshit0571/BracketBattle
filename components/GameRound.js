import BracketValue from "./BracketValue";

const GameRound = ({ first, second, setWinner, setNumber, Number, Round }) => {
  const bg = [
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-orange-500",
    "bg-purple-500",
  ];

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
          <BracketValue value={first} bg={bg[Round]} />
        </div>
        <p>vs</p>
        <div
          className="cursor-pointer"
          onClick={() => {
            setWinner((winner) => [...winner, second]);
            setNumber(Number + 2);
          }}
        >
          <BracketValue value={second} bg={bg[Round]} />
        </div>
      </div>
    </div>
  );
};

export default GameRound;
