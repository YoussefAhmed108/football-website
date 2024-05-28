import React from "react";

const API_KEY : string = process.env.DATA_API_KEY as string;
export async function getAllMatches() {
  const url = "https://api-football-v1.p.rapidapi.com/v3/fixtures";
  const leagues = {
    premierLeague: { id: 39, name: "Premier League" },
    ligue1: { id: 61, name: "Ligue 1" },
    bundesliga: { id: 78, name: "Bundesliga" },
    laLiga: { id: 140, name: "La Liga" },
    seriaA: { id: 135, name: "Serie A" },
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY ,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchData = async (league: { id: number; name: string }) => {
    const response = await fetch(`${url}?league=${league.id}&season=2023`, options);
    const data = await response.json();
    return { id: league.id, name: league.name, data: data.response };
  };

  const premierLeagueData = await fetchData(leagues.premierLeague);
  const ligue1Data = await fetchData(leagues.ligue1);
  const bundesligaData = await fetchData(leagues.bundesliga);
  const laLigaData = await fetchData(leagues.laLiga);
  const seriaAData = await fetchData(leagues.seriaA);

  return [
    premierLeagueData,
    ligue1Data,
    bundesligaData,
    laLigaData,
    seriaAData,
  ];
}
