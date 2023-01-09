import { useEffect, useState } from "react";
import {
  Card,
  HStack,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Badge,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const moveTo = (direction) => {
    if (direction === "prev") {
      setSearchParams({ page: currentPage - 1 }); //set object
      setCurrentPage(currentPage - 1);
    } else if (direction === "next") {
      setSearchParams({ page: currentPage + 1 });
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    const currentPage = parseInt(searchParams.get("page") || 1);
    setCurrentPage(currentPage);
  }, [searchParams]);

  return (
    <HStack>
      {currentPage === 1 ? <Button disabled colorScheme='red'>Prev</Button> : <Button onClick={() => moveTo("prev")} colorScheme="green">Prev</Button>}
      <Button onClick={() => moveTo("next")} colorScheme='green'>Next</Button>
    </HStack>
  );
};

const PokemonList = ({ pokemons }) => {
  console.log(pokemons);
  return (
    pokemons &&
    pokemons.length > 0 && (
      <Box role="pokemon-list">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <Card >
              <CardHeader>
                <Heading as="h3" size="md">
                  {pokemon.name}
                </Heading>
              </CardHeader>
              <CardBody>
                <HStack>
                <Image src={pokemon.sprites.front_default} alt='Front Default'/>
                <Image src={pokemon.sprites.back_default} alt='Back Default'/>
                <Image src={pokemon.sprites.front_shiny} alt='Front Shiny'/>
                <Image src={pokemon.sprites.back_shiny} alt='Back Shiny'/>
                </HStack>
                {pokemon.types.map((tipe,index) => (
                  <Badge key={index} m={1}>{tipe.type.name}</Badge>
                ))}
              </CardBody>
            </Card>
          </Link>
        ))}
      </Box>
    )

  );
};
const Home = () => {
  //get list
  const fetchPokemons = async (page) => {
    //get pokemon list with image
    const displayPerPage = 20;
    const offset = (page - 1) * 20;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${displayPerPage}&offset=${offset}`;

    const response = await fetch(url);
    const data = await response.json();
    const pokemonList = data.results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();
      return pokemonData;
    });

    //set pokemonList to state
    setPokemons(await Promise.all(pokemonList));
  };

  const [pokemons, setPokemons] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = parseInt(searchParams.get("page") || 1);
    fetchPokemons(page);
  }, [searchParams]);

  return (
    <>
      <Heading as="h2" size="md" pt={23} mb={3} >
        Pokemon List
      </Heading>
      <Pagination />
      <PokemonList pokemons={pokemons} />
    </>
  );
};

export default Home;
