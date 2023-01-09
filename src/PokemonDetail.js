import { useEffect, useState } from "react";
import { Badge, Tr, Td, HStack, VStack, Heading, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Table } from "@chakra-ui/react";
import { Tbody } from "@chakra-ui/react";

const Detail = ({ pokemon }) => {
  return (
    <Box>
      {pokemon && (
        <Box role="pokemon-detail">
          <Heading as="h3" size="md">{pokemon.name}</Heading>
          {pokemon.types.map((tipe, index) => (
            <Badge key={index} m={1}>{tipe.type.name}</Badge>
          ))}
          <HStack>
            <Image src={pokemon.sprites.front_default} />
            <Image src={pokemon.sprites.back_default} />
            <Image src={pokemon.sprites.front_shiny} />
            <Image src={pokemon.sprites.back_shiny} />
          </HStack>
          <VStack>
            <Table>
              <thead>
                <Tr>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </thead>
              <Tbody>
                <Tr>
                  <Td>Height</Td>
                  <Td>{pokemon.height}</Td>
                </Tr>
                <Tr>
                  <Td>Weight</Td>
                  <Td>{pokemon.weight}</Td>
                </Tr>
                <Tr>
                  <Td>Base Experience</Td>
                  <Td>{pokemon.base_experience}</Td>
                </Tr>
                <Tr>
                  <Td>Abilities</Td>
                  <Td>{pokemon.abilities.map((ability, index) => (
                    <p key={index}>{ability.ability.name}</p>
                  ))}</Td>
                </Tr>
                <Tr>
                  <Td>Stats</Td>
                  <Td>{pokemon.stats.map((stat,index) => (
                    <p key={index}>{stat.stat.name} : {stat.base_stat}</p>
                  ))}</Td>
                </Tr>
              </Tbody>
            </Table>
          </VStack>
        </Box>
      )}
    </Box>
  );
};
const Page = () => {
  const {id} = useParams()
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setPokemon(data);
  };
  // console.log(useParams());
  useEffect(() => {
    fetchPokemon(id)
  }, [id]);

  return <Detail pokemon={pokemon} />;
};

export default Page;
