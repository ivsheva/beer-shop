import {
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const Prices = ({ prices }) => {
  const { filteredValues } = prices;
  const [isExpanded, setExpanded] = useState(true);

  const showMin = filteredValues[0];
  const showMax = filteredValues[1];

  return (
    <Flex direction="column" width={{ base: "none", lg: "240px", xl: "260px" }}>
      <Flex
        justify="space-between"
        align="center"
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
      </Flex>
      {isExpanded && (
        <Flex direction="column">
          <Text
            color="grey"
            fontSize="16px"
            fontWeight="400"
          >{`€${showMin} - €${showMax}`}</Text>
          <Slider prices={prices} />
        </Flex>
      )}
    </Flex>
  );
};

const Slider = ({ prices }) => {
  const { min, max, setFilteredValues } = prices;

  return (
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
  );
};

export default Prices;
