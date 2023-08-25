import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const Prices = ({ prices, filteredValues, setFilteredValues }) => {
  const min = prices.min;
  const max = prices.max;

  const [isExpanded, setExpanded] = useState(true);

  const showMin = filteredValues[0];
  const showMax = filteredValues[1];

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ base: "none", lg: "240px", xl: "260px" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingY="8px"
        onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
      >
        <Text
          color="lightblack"
          fontFamily="Questrial, sans-serif"
          fontWeight="600"
          fontSize="18px"
        >
          Prices
        </Text>
        <PiCaretDownBold size={10} />
      </Box>
      {isExpanded && (
        <Box display="flex" flexDirection="column">
          <Text
            color="grey"
            fontSize="16px"
            fontWeight="400"
          >{`€${showMin} - €${showMax}`}</Text>
          <RangeSlider
            onChange={(event) => setFilteredValues(event)}
            colorScheme="gray"
            aria-label={["min", "max"]}
            min={min}
            max={max}
            defaultValue={[0, max]}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb
              index={0}
              _focus={{ boxShadow: "none" }}
              backgroundColor="lightgreen"
            />
            <RangeSliderThumb
              index={1}
              _focus={{ boxShadow: "none" }}
              backgroundColor="lightgreen"
            />
          </RangeSlider>
        </Box>
      )}
    </Box>
  );
};

Prices.propTypes = {
  prices: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  filteredValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  setFilteredValues: PropTypes.func.isRequired,
};

export default Prices;
