const DrinksCard = ({ drink }) => {
  return (
    <div className="my-4 bg-white border-slate-950 border-2">
      <h2 className="p-3 text-2xl font-medium">{drink.name}</h2>
      <p className="p-3 text-sm">{drink.description}</p>
      <p className="text-sm pt-3 underline text-green-900 ">Contains:</p>
      <p className="text-xs p-3">{drink.ingredients.join(", ")}</p>
    </div>
  );
};

export default DrinksCard;
