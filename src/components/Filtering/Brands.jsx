import { Box, Checkbox, Link, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const Brands = ({ allBrands, checkedBrands, setCheckedBrands }) => {
  const [isExpanded, setExpanded] = useState(true);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ base: "none", lg: "240px", xl: "260px" }}
      maxHeight=""
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
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
      </Box>
      {isExpanded && (
        <Box display="flex" flexDirection="column" overflowY="scroll">
          {allBrands.map((item) => (
            <Box key={item.id} display="flex">
              <Checkbox
                size="lg"
                colorScheme="teal"
                onChange={(event) =>
                  setCheckedBrands((prevCheckedBrands) => ({
                    ...prevCheckedBrands,
                    [item.id]: event.target.checked,
                  }))
                }
                isChecked={checkedBrands[item.id]}
                value={item.id}
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
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

Brands.propTypes = {
  allBrands: PropTypes.array.isRequired,
  checkedBrands: PropTypes.object.isRequired,
  setCheckedBrands: PropTypes.func.isRequired,
};

export default Brands;
