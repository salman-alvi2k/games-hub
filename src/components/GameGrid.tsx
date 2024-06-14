import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

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
  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.record))
      .catch((err) => setErrors(err));
  });
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
