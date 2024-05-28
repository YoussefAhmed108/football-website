
import { getAllMatches } from "@/lib/getAllMatches";
import React from "react";
import League from "./League";

export default async function Matches() {
  const data: Promise<League[]> = getAllMatches();
  const leagues = await data;
  return (
    <div>
      <h1>All Matches</h1>

      <League league={leagues[0]}/>
      <h2>La Liga</h2>
      <div></div>
      <h2>Bundesliga</h2>
      <div></div>
      <h2>Ligue 1</h2>
      <div></div>
      <h2>Serie A</h2>
      <div></div>
    </div>
  );
}
