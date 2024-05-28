import Image from "next/image";
import Matches from "./components/Matches";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Matches/>
    </main>
  );
}
