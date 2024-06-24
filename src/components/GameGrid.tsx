import { Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {games ? (
        <>
          {error && <Text>{error}</Text>}
          <ul className="list-none">
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
