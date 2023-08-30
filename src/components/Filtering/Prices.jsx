/* eslint-disable react/prop-types */
import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const Prices = ({ prices }) => {
  const { min, max, filteredValues, setFilteredValues } = prices;

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
            step={0.01}
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

export default Prices;
