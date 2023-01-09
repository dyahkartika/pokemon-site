import {Heading, HStack, Image, Box} from "@chakra-ui/react"
const Unauthorized = () => {
  return (
    <div>
      <Box mt={60}>
      <HStack>
      <Heading as="h2" size="md" color="orange" mt={3} >You are not authorized to open this page</Heading>
      <Image alt="error" src='imgpkm/error.png' w={50}/>

      </HStack>
      </Box>
      {/* <h1>You are not authorized to open this page</h1> */}
    </div>
  );
};

export default Unauthorized;
