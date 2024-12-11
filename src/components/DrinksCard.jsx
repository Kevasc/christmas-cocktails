const DrinksCard = ({ drink }) => {
  return (
    <div>
      <div className="text-black border-slate-950  border-2">
        <h2 className="p-3">{drink.name}</h2>
        <h3 className="p-3 text-sm">{drink.description}</h3>
        <p className="text-xs p-3">{drink.ingredients.join(", ")}</p>
        <div className="flex items-center mt-2">
          <div
            style={{
              backgroundColor: drink.colour,
              height: "100%",
              width: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DrinksCard;
