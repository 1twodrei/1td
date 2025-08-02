import GameOfLifeCanvas from "@/components/GameOfLifeCanvas";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative z-10">
      <GameOfLifeCanvas />
      <div style={{ color: 'white', zIndex: 10 }}>
        test
      </div>
    </div>
  );
}
