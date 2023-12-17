import {
  Box,
  Divider,
  Hide,
  Image,
  Link,
  Show,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import footerItems from "../../data/footerItems";
import paymentMethods from "../../data/paymentMethods";
import logo from "../../img/img/logo-footer.jpg";
import FooterAccordion from "./FooterAccordion";
import FooterBlock from "./FooterBlock";

const FooterNavigation = () => {
  return (
    <Flex
      direction="column"
      align="center"
      width="100%"
      height={{ xl: "560px", "2xl": "540px" }}
      bg="darkgreen"
      color="white"
      overflow="hidden"
    >
      <Flex
        width={{ base: "100%", lg: "70%" }}
        justify="space-between"
        wrap="wrap"
      >
        <Hide below="lg">
          <FooterBlocks footerItems={footerItems} />
        </Hide>
        <Show below="lg">
          <FooterAccordions footerItems={footerItems} />
        </Show>
      </Flex>
      <Socials />
      <Divider
        width={{ base: "100%", lg: "80%", xl: "70%" }}
        marginTop="24px"
        borderColor="green"
        borderWidth="1px"
      />
      <FooterBottom />
    </Flex>
  );
};

const FooterBlocks = ({ footerItems }) => {
  return footerItems.map((footerItem) => (
    <FooterBlock
      key={footerItem.id}
      title={footerItem.title}
      email={footerItem.email}
      list={footerItem.list}
    />
  ));
};

const FooterAccordions = ({ footerItems }) => {
  return footerItems.map((footerItem) => (
    <FooterAccordion
      key={footerItem.id}
      title={footerItem.title}
      email={footerItem.email}
      list={footerItem.list}
    />
  ));
};

const Socials = () => {
  return (
    <Box display="flex" marginTop="64px" columnGap="24px">
      <Link href="https://www.facebook.com/beerdomeNL" target="_blank">
        <FaFacebookF size={20} />
      </Link>
      <Link href="https://www.instagram.com/beerdome" target="_blank">
        <BsInstagram size={20} />
      </Link>
    </Box>
  );
};

const FooterBottom = () => {
  return (
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
  );
};

export default FooterNavigation;
