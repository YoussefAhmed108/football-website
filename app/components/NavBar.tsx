import React from "react";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <div className="flex flex-row gap-[150px] bg-slate-800">
      <h1 className="text-3xl font-bold">Football Scores!</h1>
      <div className="flex flex-row gap-[20px]">
        <button>Home</button>
        <button>Matches</button>
        <button>Teams</button>
      </div>
      <div className="ml-auto mr-[20px]">
        <SearchBar />
      </div>
    </div>
  );
}
