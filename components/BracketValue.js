const BracketValue = ({ value, bg }) => {
  console.log(bg);
  return (
    <div className={"rounded my-2 p-2 w-[100px] text-white " + bg + "  "}>
      {value}
    </div>
  );
};

export default BracketValue;
