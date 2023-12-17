import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import servicePages from "../../data/servicePages";
import formatToUrl from "../../helpers/formatToUrl";

const ServicePages = ({ activePage }) => {
  return (
    <Flex
      width={{ base: "100%", lg: "70%" }}
      margin="0 auto"
      wrap="wrap"
      rowGap="20px"
      columnGap="20px"
      marginTop="20px"
      justify="center"
    >
      {servicePages.map((servicePage) => (
        <Link key={servicePage.id} to={servicePage.link}>
          <Text
            padding="15px 28px"
            bgColor="darkerWhite"
            fontSize="16px"
            fontWeight={
              activePage === formatToUrl(servicePage.title) ? 600 : 500
            }
          >
            {servicePage.title}
          </Text>
        </Link>
      ))}
    </Flex>
  );
};

export default ServicePages;
