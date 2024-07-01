import { Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
// import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {games ? (
        <>
          {error && <Text>{error}</Text>}
          <ul>
            {games.map((game) => (
              <li key={game.id}>{game.name}</li>
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
