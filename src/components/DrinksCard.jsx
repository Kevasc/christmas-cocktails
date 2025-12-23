const DrinksCard = ({ drink }) => {
  return (
    <div className="w-full max-w-xl backdrop-blur-md px-3 py-3 text-center text-zinc-100">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold font-body tracking-wide text-zinc-200 xl:text-3xl">
          {drink.name}
        </h2>
        <p className="text-[10px] uppercase tracking-widest text-gray-200 font-bold dark:text-zinc-400 mt-1 font-body">
          How to make
        </p>
        <p className=" leading-snug text-zinc-200 text-zinc-300 font-body">
          {drink.description}
        </p>

        {/* <p className="text-[10px] uppercase tracking-widest text-zinc-500 text-zinc-400 mt-1 font-body">
          Contains
        </p> */}

        {/* <p className="text-xs text-zinc-600 text-xl text-zinc-400 font-body">
          {drink.ingredients.join(", ")}
        </p> */}
      </div>
      {/* divider */}
      <div className="flex items-center justify-center gap-1 mb-3 my-3 opacity-100">
        <div className="h-px w-24 bg-slate-500" />
        <span className="text-slate-500">✮</span>
        <div className="h-px w-24 bg-slate-500" />
      </div>
    </div>
  );
};

export default DrinksCard;
