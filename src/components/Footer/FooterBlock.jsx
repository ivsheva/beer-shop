import { Flex, Text } from "@chakra-ui/react";
import FooterLink from "./FooterLink";

const FooterBlock = ({ title, email, list }) => {
  return (
    <Flex direction="column" marginTop="64px" lineHeight="140%">
      <Text
        fontFamily="Questrial, sans-serif"
        fontSize="15px"
        fontWeight="700"
        marginBottom="24px"
      >
        {title}
      </Text>
      <Flex direction="column" rowGap="4px">
        {list.map((footerItem) => (
          <FooterLink key={footerItem.id} footerItem={footerItem} />
        ))}
        {email && (
          <Flex
            marginTop="20px"
            direction="column"
            rowGap="4px"
            fontSize="14px"
          >
            <Text>E-mail: {email}</Text>
            <Text>KVK-nummer: 68251262</Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default FooterBlock;
