import React from "react";
import { useQuery } from "react-query";
import { getAllBooks } from "../../../services/BookService";
import Loader from "../../Loader";
import Error from "../../Error";
import { Card, CardEmpty } from "@salesforce/design-system-react";
import BookItem from "./BookItem";
export interface BookListProps {}

const BooksList: React.FC<BookListProps> = () => {
  const { data, error, isLoading, isError } = useQuery<BookType[]>(
    "books",
    getAllBooks
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    console.log(error);
    return <Error message={error} />;
  }

  return (
    <div className="slds-grid slds-grid_vertical">
      <Card
        id="bookList"
        heading=""
        empty={
          data?.length === 0 ? (
            <CardEmpty heading="No book found"></CardEmpty>
          ) : null
        }
      >
        {data?.map((item) => (
          <BookItem book={item} />
        ))}
      </Card>
    </div>
  );
};

export default BooksList;
