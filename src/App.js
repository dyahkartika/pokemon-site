import { Box, HStack, Container, Heading, Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pokemon from "./PokemonList";
import { Link } from "react-router-dom";
import PokemonDetail from "./PokemonDetail";
import PokemonLegend from "./PokemonLegend";
import ProtectedRoute from "./ProtectedRoute";
import Unauthorized from "./Unauthorized";
import { useNavigate } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  const enterSecretPage = () => {
    navigate("/legend?password=secret");
  };

  return (
    <Container marginTop="2">
      <Box marginBottom={5}>
        <HStack>
        <Image alt="pokeball" src='imgpkm/pokeball.png' w={8}/>
        <Heading as="h1" color="red.600" textShadow='2px 2px gray'>PokeDeh</Heading>
        </HStack>
        <HStack spacing="2">
          <Box color="yellow.400">
          <Link to="/">
            <Heading as="h3" size="sm">Home</Heading>
          </Link>
          </Box>
          <Box color="yellow.400">
          <Link to="/pokemon">
            <Heading as="h3" size="sm">Pokemon</Heading>
          </Link>
          </Box>
          <Box color="yellow.400">
          <Link to="/legend" onDoubleClick={enterSecretPage}>
            <Heading as="h3" size="sm">Legend</Heading>
          </Link>
          </Box>
          
        </HStack>
      </Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon">
          <Route index element={<Pokemon/>}/>
          <Route path=":id" element={<PokemonDetail/>}/>
        </Route>
        <Route
          path="/legend"
          element={
            <ProtectedRoute>
              {<PokemonLegend />}
            </ProtectedRoute>
          }
        />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Routes>
    </Container>
  );
};

export default App;
