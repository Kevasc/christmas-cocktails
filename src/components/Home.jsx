import { drinkList } from "../data";
import DrinksCard from "./DrinksCard"; // Import DrinksCard component

const Home = () => {
  const cocktailList = drinkList.cocktails.map((drink, index) => {
    return <DrinksCard key={index} drink={drink} />;
  });
  const mocktailsList = drinkList.mocktails.map((drink, index) => {
    return <DrinksCard key={index} drink={drink} />;
  });

  return (
    <div className="grid justify-center text-center font-mono text-3xl bg-white min-h-screen">
      <h1 className=" font-yesevaOne">Christmas Cocktail Menu</h1>
      <h2 className="bg-red-600 text-yellow-50">Alcoholic</h2>
      {cocktailList}
      <h2 className="bg-red-600 text-yellow-50">Non-Alcoholic</h2>
      {mocktailsList}
    </div>
  );
};

export default Home;
