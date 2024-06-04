import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" "nav" "aside" "main"`,
      }}
    >
      <GridItem area="nav" bg="gray">
        Nav
      </GridItem>
      <GridItem area="aside" bg="red">
        Aside
      </GridItem>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
