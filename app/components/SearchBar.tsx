"use client";

const SearchBar = () => {
  return (
    <div className="flex items-center ">
      <input
        autoComplete="off"
        type="text"
        placeholder="Explore E~Shop"
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-80"
      />
      <button className="bg-slate-700 hover:opacity-80 text-white p-2 rounded-md ">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
