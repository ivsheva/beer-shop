import { List, ListItem, Show, Divider } from "@chakra-ui/react";
import navItems from "../data/navItems";

const NavBar = () => {
  return (
    <Show above="lg">
      <Divider borderColor="#DFDFDF" />
      <List
        margin="0 auto"
        marginY="20px"
        display="flex"
        justifyContent="space-between"
        fontSize="18px"
        fontWeight="500"
        lineHeight="150%"
        flexWrap="wrap"
        columnGap="14px"
        rowGap="20px"
        maxW="1200px"
        paddingX="1%"
      >
        {navItems.map((navItem) => (
          <ListItem
            key={navItem.id}
            bgColor={navItem.highlight ? "green" : "inherit"}
            padding={navItem.highlight ? "2px 10px" : "unset"}
            color={navItem.highlight ? "white" : "black"}
          >
            {navItem.title}
          </ListItem>
        ))}
      </List>
    </Show>
  );
};

export default NavBar;
