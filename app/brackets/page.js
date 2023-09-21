"use client";
import { useSearchParams } from "next/navigation";

const BracketPage = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("data").slice(1, -1);

  const values = search.split(",");

  return (
    <div>
      here is the data:
      {values.map((value) => {
        return <div key={value}>{value}</div>;
      })}
    </div>
  );
};

export default BracketPage;
