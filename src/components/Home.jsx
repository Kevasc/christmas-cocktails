import { drinkList } from "../data";
import DrinksCard from "./DrinksCard";
// import santa from "./santa.png";
import Snowfall from "react-snowfall";
const Home = () => {
  const cocktailList = drinkList.cocktails.map((drink, index) => {
    return <DrinksCard key={index} drink={drink} />;
  });
  // const mocktailsList = drinkList.mocktails.map((drink, index) => {
  //   return <DrinksCard key={index} drink={drink} />;
  // });

  return (
    <div className="grid justify-center text-center p-8 bg-[radial-gradient(circle,#fdd1ea,#efc7ea,#debeea,#c9b6ea,#afafea,#b3ace8,#b8aae5,#bca7e2,#d9a8d8,#edaccb,#f9b4bf,#fdbeb7)] items-center font-mono h-full">
      <Snowfall
        style={{ position: "fixed", height: "100%" }}
        snowflakeCount={75}
        color={"#ffffff"}
      />
      <h1 className="text-8xl text-pink-100 font-medium font-germaniaOne p-3 pt-2">
        Christmas Cocktails
      </h1>
      {/* <p className="text-base text-red-700 underline text-black-500 p-1">
        Cocktails & Shots
      </p> */}
      {cocktailList}
      {/* <p className="text-base  text-red-700 underline text-black-500 p-1">
        Mocktails
      </p>
      {mocktailsList} */}
      {/* <div className="flex justify-center h-48">
        <img src={santa} alt="Logo" />
      </div> */}
    </div>
  );
};

export default Home;
