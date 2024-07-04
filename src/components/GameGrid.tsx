import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {games ? (
        <>
          {error && <Text>{error}</Text>}
          <SimpleGrid columns={3} spacing={10}>
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </SimpleGrid>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default GameGrid;
