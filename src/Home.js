
import { Heading, Image, HStack, VStack } from "@chakra-ui/react";
const Home = () => {
  return (
    <div>
      <VStack>
      <Heading as="h4" size="3xl" color="orange" mt={180} textShadow='1px 1px gray'>Welcome!</Heading>
      <HStack>
      <Image alt="meowth" src='imgpkm/meowth.png' w={50}/>
      <Image alt="bullbasaur" src='imgpkm/bullbasaur.png' w={50}/>
      <Image alt="charmander" src='imgpkm/charmander.png' w={50}/>
      <Image alt="eevee" src='imgpkm/eevee.png' w={50}/>
      <Image alt="pikachu" src='imgpkm/pikachu.png' w={50}/>
      <Image alt="psyduck" src='imgpkm/psyduck.png' w={50}/>
      <Image alt="squirtle" src='imgpkm/squirtle.png' w={50}/>
      </HStack>

      </VStack>
    </div>
    
  );
};

export default Home;
