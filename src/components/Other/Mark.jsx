import { HStack, Image } from "@chakra-ui/react";
import star from "../../img/svg/star.svg";

const Mark = () => {
  return (
    <HStack spacing="0.5">
      <Image src={star} boxSize="16px" />
      <Image src={star} boxSize="16px" />
      <Image src={star} boxSize="16px" />
      <Image src={star} boxSize="16px" />
      <Image src={star} boxSize="16px" />
    </HStack>
  );
};

export default Mark;
