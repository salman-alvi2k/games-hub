import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {games ? (
        <>
          {error && <Text>{error}</Text>}
          <SimpleGrid>
            {games.map((item) => (
              <GameGrid key={item.id} />
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
