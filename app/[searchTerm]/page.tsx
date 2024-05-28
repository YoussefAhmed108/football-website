import { getAllMatches } from "@/lib/getAllMatches";
import React from "react";

export default async function SearchTerm({
  params,
}: {
  params: { searchTerm: string };
}) {
  const { searchTerm } = params;
  const data: Promise<League[]> = getAllMatches();
  const leagues = await data;
  const flattendLeagues = leagues.flatMap((league) => league.data);
  const matches: Match[] = flattendLeagues.filter(
    (match) =>
      match.teams.home.name.toLowerCase() === searchTerm.toLowerCase() ||
      match.teams.away.name.toLowerCase() === searchTerm.toLowerCase()
  );
  return (
    <div>
      {matches.map((match , index) => (
        <div key={index}>
          <p>
            {match.teams.home.name} vs {match.teams.away.name}
          </p>
        </div>
      ))}
    </div>
  );
}
