import BracketValue from "@/components/BracketValue";

const Component = ({ one, two, three, four }) => {
  const bg = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",

    "bg-purple-500",

    "bg-orange-500",
  ];

  return (
    <div className="w-full flex justify-between items-center p-5">
      <div className="flex flex-col w-full ">
        <BracketValue value={one} bg={bg[Math.floor(Math.random() * 5)]} />
        <BracketValue value={two} bg={bg[Math.floor(Math.random() * 5)]} />
      </div>
      <div className="flex flex-col">
        <BracketValue value={three} bg={bg[Math.floor(Math.random() * 5)]} />
        <BracketValue value={four} bg={bg[Math.floor(Math.random() * 5)]} />
      </div>
    </div>
  );
};
export default function MapBothSides(firstHalf, secondHalf) {
  const array = [];
  for (let i = 0; i < firstHalf.length; i++) {
    const node = (
      <Component
        one={firstHalf[i]}
        two={firstHalf[i + 1]}
        three={secondHalf[i]}
        four={secondHalf[i + 1]}
        key={i}
      />
    );
    i++;
    array.push(node);
  }
  return array;
}
