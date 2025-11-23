const DrinksCard = ({ drink }) => {
  return (
    <div className="my-4 bg-red-50 border-pink-200 border-2 rounded-2xl">
      <h2 className="p-3 text-3xl font-germaniaOne">{drink.name}</h2>
      <p className="p-3 text-sm">{drink.description}</p>
      <p className="text-m pt-3 font-germaniaOne">Contains:</p>
      <p className="text-xs p-3">{drink.ingredients.join(", ")}</p>
    </div>
  );
};

export default DrinksCard;
