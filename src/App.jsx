import { useState } from "react";
import Landing from "./pages/Landing";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";

export default function App() {
  const [screen, setScreen] = useState("landing");

  if (screen === "landing") {
    return (
      <Landing
        onStart={() => setScreen("game")}
      />
    );
  }

  if (screen === "game") {
    return (
      <Game
        onExit={() => setScreen("landing")}
      />
    );
  }

  if (screen === "gameover") {
    return (
      <GameOver
        score={0}
        onPlayAgain={() => setScreen("game")}
        onBackHome={() => setScreen("landing")}
      />
    );
  }
    return null;
}