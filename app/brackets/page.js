"use client";
import BracketValue from "@/components/BracketValue";
import { BracketGame } from "@/components/Game";
import MapBothSides from "@/utils/MapBothSides";
import splitArrayInHalf from "@/utils/SplitArrayInHalf";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BracketPage = () => {
  const searchParams = useSearchParams();
  const [path, setpath] = useState("");
  useEffect(() => {
    setpath(window.location.href);
  }, []);
  console.log(path);

  const [Game, setGame] = useState(false);
  const search = searchParams.get("data");
  const title = searchParams.get("title");

  const values = search.split(",");

  const [firstHalf, secondHalf] = splitArrayInHalf(values);

  const array = MapBothSides(firstHalf, secondHalf);
  console.log(values, firstHalf, secondHalf);

  return (
    <div className="w-full pb-20 pt-5 background font-sans h-full gap-20 items-center flex flex-col bg-gradient-to-br from-neutral-800 via-black to-indigo-900 ">
      <div>
        <h1 className="md:text-6xl text-3xl p-2 font-bold text-center bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent ">
          {title} Bracket
        </h1>
        <p className="text-center md:text-3xl text-xl mt-1 text-gray-400">
          bracket-battle.com
        </p>
      </div>
      {Game ? (
        <div className="flex flex-col justify-start items-center w-full  md:w-[98%] gap-5">
          <BracketGame data={values} title={title} path={path} />
        </div>
      ) : (
        <div className="flex flex-col scrollbar h-[700px] w-full overflow-y-auto overflow-x-hidden  scroll-m-0 md:w-[98%] gap-5">
          {array.map((node) => {
            return node;
          })}
        </div>
      )}
      <button
        className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-md "
        onClick={() => {
          setGame(!Game);
        }}
      >
        {Game ? "Restart" : "Start"}
      </button>
    </div>
  );
};

export default BracketPage;
