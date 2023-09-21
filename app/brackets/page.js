"use client";
import BracketValue from "@/components/BracketValue";
import MapBothSides from "@/utils/MapBothSides";
import splitArrayInHalf from "@/utils/SplitArrayInHalf";
import { useSearchParams } from "next/navigation";

const BracketPage = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("data");

  const values = search.split(",");

  const [firstHalf, secondHalf] = splitArrayInHalf(values);

  const array = MapBothSides(firstHalf, secondHalf);
  console.log(array);

  return (
    <div className="w-full bg-zinc-700">
      here is the data:
      {array.map((node) => {
        return node;
      })}
    </div>
  );
};

export default BracketPage;
