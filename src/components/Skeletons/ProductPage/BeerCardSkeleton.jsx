import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const BeerCardSkeleton = () => {
  return (
    <Card
      display="flex"
      flexDirection="column"
      width="250px"
      justifyContent="center"
      height="400px"
      rowGap="5px"
    >
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText height="100px" />
      </CardBody>
    </Card>
  );
};

export default BeerCardSkeleton;
