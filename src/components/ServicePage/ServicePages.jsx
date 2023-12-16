import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import servicePages from "../../data/servicePages";
import formatToUrl from "../../helpers/formatToUrl";

const ServicePages = ({ activePage }) => {
  return (
    <Box
      display="flex"
      width={{ base: "100%", lg: "70%" }}
      margin="0 auto"
      flexWrap="wrap"
      rowGap="20px"
      columnGap="20px"
      marginTop="20px"
      justifyContent="center"
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
    </Box>
  );
};

export default ServicePages;
