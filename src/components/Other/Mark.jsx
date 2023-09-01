import { HStack, Image } from "@chakra-ui/react";
import star from "../../img/svg/star.svg";

const Mark = () => {
  return (
    <HStack spacing="0.5">
      <Image src={star} boxSize="24px" />
      <Image src={star} boxSize="24px" />
      <Image src={star} boxSize="24px" />
      <Image src={star} boxSize="24px" />
      <Image src={star} boxSize="24px" />
    </HStack>
  );
};

export default Mark;
