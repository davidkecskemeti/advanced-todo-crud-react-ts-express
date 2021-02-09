import React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { createBook } from "../../services/BookService";
import BookForm from "../Book/BookForm";

export interface CreateBookProps {}

const CreateBook: React.FC<CreateBookProps> = () => {
  const history = useHistory();
  const { mutateAsync, isLoading } = useMutation(createBook);
  const onFormSubmit = async (data: BookType) => {
    await mutateAsync(data);
    history.push("/");
  };
  return <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />;
};

export default CreateBook;
