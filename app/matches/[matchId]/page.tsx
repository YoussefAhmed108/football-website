import { getAllMatches } from "@/lib/getAllMatches";
import React from "react";

export async function generateStaticParams() {
  const data: Promise<League[]> = getAllMatches();
  const leagues = await data; //deduped
  const matches = leagues.flatMap((league) => league.data);
  
  return matches.map((match) => ({
      matchId: match.fixture.id.toString()
  }))
}

export default async function Match({ params }: { params: {matchId: string} }) {
  const data: Promise<League[]> = getAllMatches();
  const leagues = await data;
  const { matchId } = params;
  const flattendLeagues = leagues.flatMap((league) => league.data);
  const match:Match | undefined = flattendLeagues.find((match) => match.fixture.id === parseInt(matchId));
  //console.log(typeof match?.fixture.id);
  return (
    <div>
      <h1>
        {match?.teams.home.name} vs {match?.teams.away.name}
      </h1>
    </div>
  );
}
