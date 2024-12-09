const DrinksCard = ({ drink }) => {
  return (
    <div>
      <div className="bg-yellow-300 text-black">
        <h2>{drink.name}</h2>
        <h3 className="text-sm">{drink.description}</h3>
        <p className="text-xs">{drink.ingredients.join(", ")}</p>
      </div>
      <div
        className="flex justify-center items-center m-4"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: drink.colour,
            height: "50px",
            width: "50px",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default DrinksCard;
