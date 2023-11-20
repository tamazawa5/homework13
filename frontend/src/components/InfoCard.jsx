import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { API_URL } from "../constants/path";

function InfoCard(props) {
  const { id, title, author, publisher, image } = props;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={`${API_URL}/${image}`}
        alt={title}
      />
      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text py="2">{author}</Text>
          <Text py="2">{publisher}</Text>
        </CardBody>
        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            See More
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default InfoCard;
