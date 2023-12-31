import { Text, Flex } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import posts from "../../data/posts";
import Post from "./Post";

const Posts = () => {
  return (
    <Flex direction="column" maxWidth="80%" margin="0 auto" marginTop="84px">
      <Text
        fontFamily="Questrial, sans-serif"
        fontSize="20px"
        color="lightblack"
        fontWeight="600"
        lineHeight="140%"
        marginBottom="32px"
      >
        Latest instagram posts
      </Text>
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {posts.map((post) => (
          <SwiperSlide
            key={post.id}
            style={{ maxWidth: "450px", maxHeight: "450px" }}
          >
            <Post
              img={post.img}
              description={post.description}
              link={post.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default Posts;
