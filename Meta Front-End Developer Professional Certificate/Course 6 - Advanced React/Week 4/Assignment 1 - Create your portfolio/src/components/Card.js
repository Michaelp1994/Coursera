import {
  CardBody,
  CardFooter,
  Card as ChakraCard,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <ChakraCard borderRadius="lg">
      {/* <VStack> */}
      <Image src={imageSrc} borderTopRadius="lg" />

      <CardBody>
        <VStack align="flex-start" gap="8">
          <Heading size="lg">{title}</Heading>
          <Text>{description}</Text>
        </VStack>
      </CardBody>
      <CardFooter>
        <HStack>
          <Text>See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </CardFooter>
      {/* </VStack> */}
    </ChakraCard>
  );
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
};

export default Card;
