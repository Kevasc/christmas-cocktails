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
    <div className="grid justify-center w-fit min-h-screen text-center p-6 border-slate-950 m-3 border-2 bg-red-100 items-center font-mono text-3xl ">
      <h1 className="text-8xl font-monsieurLaDouliseRegular text-sh p-3 pt-2">
        Christmas Cocktails
      </h1>
      <h2 className="text-sm underline text-black-500 p-3">
        Cocktails & Shots
      </h2>
      <div className=" bg-white"> {cocktailList}</div>
      <h2 className="text-sm underline text-black-500 p-3">Mocktails</h2>
      <div className="bg-white ">{mocktailsList}</div>
      {/* <div className="bg-red-100">
        <img src={santa} alt="Logo" />
      </div> */}
    </div>
  );
};

export default Home;
