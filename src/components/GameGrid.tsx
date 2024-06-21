import { useEffect, useState } from "react";
import { Spinner, Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.messsage));
  });
  return (
    <>
      {games ? (
        <>
          {error && <Text>{error}</Text>}
          <ul>
            {games.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default GameGrid;
