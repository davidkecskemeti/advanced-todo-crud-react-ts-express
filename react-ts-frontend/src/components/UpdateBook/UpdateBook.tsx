import React from "react";
import { useMutation, useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import { getBook, updateBook } from "../../services/BookService";
import BookForm from "../Book/BookForm";
import Loader from "../Loader";
import Error from "../Error";

export interface UpdateBookProps {}

interface UpdateBookParam {
  id: string;
}

const UpdateBook: React.FC<UpdateBookProps> = () => {
  const { id } = useParams<UpdateBookParam>();
  console.log(id);

  const history = useHistory();
  const { data, error, isLoading, isError } = useQuery<BookType>(
    ["book", { id }],
    getBook
  );
  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);
  const onFormSubmit = async (data: BookType) => {
    await mutateAsync({ ...data, id });
    history.push("/");
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    console.log(error);
    return <Error message={error} />;
  }

  return (
    <BookForm
      initialValues={data}
      onFormSubmit={onFormSubmit}
      isLoading={isMutating}
    />
  );
};

export default UpdateBook;
