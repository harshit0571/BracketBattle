import BracketValue from "@/components/BracketValue";

const Component = ({ one, two, three, four }) => {
  return (
    <div className="w-full bg-slate-500 flex justify-between">
      <div className="flex flex-col w-full">
        <BracketValue value={one} />
        <BracketValue value={two} />
      </div>
      <div className="flex flex-col">
        <BracketValue value={three} />
        <BracketValue value={four} />
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
      />
    );
    i++;
    array.push(node);
  }
  return array;
}