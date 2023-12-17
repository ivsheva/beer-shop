import { useAuth0 } from "@auth0/auth0-react";
import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DisclosureContext } from "../../contexts/DisclosureContext";

const FooterLink = ({ footerItem }) => {
  const { cartDisclosure, wishDisclosure } = useContext(DisclosureContext);
  const { loginWithRedirect } = useAuth0();

  const clickables = {
    cart: () => cartDisclosure.onOpen(),
    wishlist: () => wishDisclosure.onOpen(),
    login: () => loginWithRedirect(),
  };

  const handleClick = (clickable) => {
    return clickable ? clickables[clickable] : null;
  };

  return (
    <Text
      fontWeight={footerItem.highlighted ? "600" : "400"}
      fontSize="15px"
      marginBottom={footerItem.highlighted ? "8px" : ""}
      key={footerItem.id}
    >
      {footerItem.link ? (
        <Link to={footerItem.link}>{footerItem.description}</Link>
      ) : (
        <Text
          as="span"
          onClick={handleClick(footerItem.clickable)}
          cursor={footerItem.clickable ? "pointer" : "default"}
        >
          {footerItem.description}
        </Text>
      )}
    </Text>
  );
};

export default FooterLink;
