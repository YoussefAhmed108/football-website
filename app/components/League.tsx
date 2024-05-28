"use client";
import Link from "next/link";
import React from "react";

export default function League({ league }: { league: League }) {
  const { id, name, data } = league;
  const [collapsed, setCollapsed] = React.useState(false);

  const collapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <div className="flex flex-row gap-[20px]">
        <h2>{name}</h2>
        <button onClick={collapse}>{!collapsed ? "⬆️" : "⬇️"}</button>
      </div>
      <div hidden={collapsed}>
        {data?.map((match) => (
          <div key={match.fixture.id}>
            <Link href={`/matches/${match.fixture.id}`}>
              {match.teams.home.name} vs {match.teams.away.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
