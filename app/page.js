"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [Title, setTitle] = useState("");
  const [Rounds, setRounds] = useState("four");
  console.log(Title);
  console.log(Rounds);

  const getBrackets = async () => {
    const body = { prompt: Title, number: Rounds };
    const response = await axios.post("api/createBracket", body);
    console.log(response);

    if (response.status == 201) {
      const data = response.data.content;
      router.push(`/brackets?data=${data}&title=${Title}`);
    }
  };

  return (
    <main className="flex area flex-col gap-10 justify-center items-center w-full h-full">
      <h1 className="text-7xl z-20 font-bold text-center bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent  mt-8">
        Bracket Battle
      </h1>
      <div className=" z-20 flex w-full flex-col md:flex-row justify-center items-center gap-5">
        <input
          type="text"
          className="w-[80%] md:w-[60%] first-letter: px-5 py-3 rounded-md border-2 border-green-400"
          placeholder="eg: kanye west songs"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-md"
          onClick={getBrackets}
        >
          Start
        </button>
      </div>
      <div className="z-20 flex justify-center gap-2 items-center flex-col">
        <h2 className="text-xl text-white">Choose number of rounds:</h2>
        <div class="w-64 mx-auto">
          <select
            id="dropdown"
            name="dropdown"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setRounds(e.target.value)}
          >
            <option value="four">4</option>
            <option value="eight">8</option>
            <option value="sixteen">16</option>
            <option value="thirtytwo">32</option>
          </select>
        </div>
      </div>

      {/* //animation */}
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}
