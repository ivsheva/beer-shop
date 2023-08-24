import { Box, Divider, Hide, Image, Link, Show, Text } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import footerItems from "../data/footerItems";
import paymentMethods from "../data/paymentMethods";
import logo from "../img/img/logo-footer.jpg";
import FooterAccordion from "./FooterAccordion";
import FooterBlock from "./FooterBlock";

const FooterNavigation = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      width="100%"
      height={{ xl: "560px", "2xl": "540px" }}
      bg="darkgreen"
      color="white"
      overflow="hidden"
    >
      <Box
        width={{ base: "100%", lg: "70%" }}
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Hide below="lg">
          {footerItems.map((footerItem) => (
            <FooterBlock
              key={footerItem.id}
              title={footerItem.title}
              email={footerItem.email}
              list={footerItem.list}
            />
          ))}
        </Hide>
        <Show below="lg">
          {footerItems.map((footerItem) => (
            <FooterAccordion
              key={footerItem.id}
              title={footerItem.title}
              email={footerItem.email}
              list={footerItem.list}
            />
          ))}
        </Show>
      </Box>
      <Box display="flex" marginTop="64px" columnGap="24px">
        <Link href="https://www.facebook.com/beerdomeNL" target="_blank">
          <FaFacebookF size={20} />
        </Link>
        <Link href="https://www.instagram.com/beerdome" target="_blank">
          <BsInstagram size={20} />
        </Link>
      </Box>
      <Divider
        width={{ base: "100%", lg: "80%", xl: "70%" }}
        marginTop="24px"
        borderColor="green"
        borderWidth="1px"
      />
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
        width={{ base: "90%", xl: "70%" }}
        marginTop="24px"
      >
        <Image src={logo} display={{ base: "none", lg: "block" }} />
        <Text>© Copyright 2023 - RSS feed</Text>
        <Box
          marginTop="20px"
          display="flex"
          flexWrap="wrap"
          width={{ base: "95%", lg: "50%" }}
          justifyContent="center"
          rowGap="10px"
        >
          {paymentMethods.map((payment) => (
            <Box key={payment.id}>
              <Image src={payment.img} width="70%" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FooterNavigation;
