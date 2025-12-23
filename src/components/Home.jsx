import { drinkList } from "../data";
import DrinksCard from "./DrinksCard";
import image from "../components/compo__no-bg.png";

const Home = () => {
  const cocktailList = drinkList.cocktails.map((drink, index) => (
    <DrinksCard key={index} drink={drink} />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-800 to-zinc-900 flex flex-col items-center px-4 py-6 font-body">
      {/* <Snowfall
        style={{ position: "fixed", height: "100%" }}
        snowflakeCount={10}
        color="#ffffff"
      /> */}
      <h1 className="mb-5 xl:text-9xl md:text-8xl text-shadow-black-200 text-6xl mt-10 font-bold text-red-500 font-clash text-center">
        Christmas Cocktails
      </h1>
      <p className="text-lg font-clash font-bold mb-10 text-zinc-50">
        Served 'til ingredients run out
      </p>
      {/* divider
      <div className="flex items-center justify-center gap-1 mb-10 my-3 opacity-100">
        <div className="h-px w-24 bg-slate-700" />
        <span>⛄︎</span>
        <div className="h-px w-24 bg-slate-700" />
      </div> */}
      <div className="flex flex-col items-center w-full gap-2">
        {cocktailList}
      </div>
      <div className="mt-12 mb-6">
        <img
          src={image}
          alt="Christmas decoration"
          className="w-32 rounded-full"
        />
      </div>
    </div>
  );
};

export default Home;
