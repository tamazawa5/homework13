import React, { useEffect, useState } from "react";
import { InfoCard, Layout } from "../components/indexComponents";
import { getAllBooks } from "../fetcher/indexFetcher";
import { SimpleGrid } from "@chakra-ui/react";

function HomePage() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const { books } = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <Layout>
      <SimpleGrid columns={2} spacing={3} justifyContent="center" m={6}>
        {books?.map((book, idx) => (
          <InfoCard key={idx} {...book} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}

export default HomePage;
