import { Box, Image, Link, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import "../../styles/hover.css";

const Post = ({ img, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link} target="_blank">
      <Box
        maxW="450px"
        maxH="450px"
        position="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={isHovered ? "hovered" : ""}
      >
        <Image src={img} boxSize="100%" fit="contain" />
        {isHovered && (
          <Box
            position="absolute"
            bottom="0"
            width="100%"
            p="4"
            overflow="hidden"
            height="50%"
          >
            <Text
              fontSize="14px"
              overflow="hidden"
              color="white"
              maxHeight="100%"
              style={{
                textOverflow: "ellipsis",
                WebkitLineClamp: 3,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </Text>
            <Flex marginTop="20px" gap="16px">
              <AiOutlineHeart color="white" size={24} />
              <FaRegCommentDots color="white" size={24} />
              <BsBookmark color="white" size={24} />
            </Flex>
          </Box>
        )}
      </Box>
    </Link>
  );
};

export default Post;
