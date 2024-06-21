import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  record: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.record))
      .catch((err) => setError(err.messsage));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
