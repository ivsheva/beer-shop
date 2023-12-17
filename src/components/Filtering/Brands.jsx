import { Checkbox, Flex, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const Brands = ({ brands }) => {
  const { uniqueBrands, checkedBrands, setCheckedBrands } = brands;

  const [isExpanded, setExpanded] = useState(true);

  return (
    <Flex
      direction="column"
      width={{ base: "none", lg: "240px", xl: "260px" }}
      marginTop={{ base: "none", lg: "30px" }}
    >
      <Flex
        justify="space-between"
        align="center"
        paddingY="12px"
        onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
      >
        <Text
          color="lightblack"
          fontFamily="Questrial, sans-serif"
          fontWeight="600"
          fontSize="18px"
        >
          Brands
        </Text>
        <PiCaretDownBold size={10} />
      </Flex>
      {isExpanded && (
        <Flex direction="column" overflowY="scroll">
          {uniqueBrands.map((item) => (
            <Flex key={item.id}>
              <Checkbox
                size="lg"
                colorScheme="teal"
                onChange={(event) =>
                  setCheckedBrands((prevCheckedBrands) => ({
                    ...prevCheckedBrands,
                    [item.brand]: event.target.checked,
                  }))
                }
                isChecked={checkedBrands[item.brand]}
                value={item.brand}
              >
                <Link
                  marginLeft="8px"
                  color="grey"
                  fontSize="16px"
                  fontWeight="500"
                >
                  {item.brand}
                </Link>
              </Checkbox>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default Brands;
