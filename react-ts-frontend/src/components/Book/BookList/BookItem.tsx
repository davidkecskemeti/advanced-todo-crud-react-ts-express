import { Button, Icon } from "@salesforce/design-system-react";
import React from "react";
import Loader from "react-loader-spinner";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { removeBook } from "../../../services/BookService";

export interface BookItemProps {
  book: BookType;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);

  const remove = async () => {
    await mutateAsync(book.id);
    queryClient.invalidateQueries("books");
  };
  return (
    <article className="slds-card">
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__figure">
            <Icon category="standard" name="knowledge" size="small" />
          </div>
          <div className="slds-media__body">
            <h2 className="slds-card__header-title">
              <Button variant="base" className="slds-border_right">
                <Link to={`/update-book/${book.id}`}>
                  <span>{book.title}</span>
                </Link>
              </Button>
            </h2>
          </div>
          <div className="slds-no-flex">
            <Button color="secondary" variant="destructive" onClick={remove}>
              {isLoading ? (
                <Loader type="ThreeDots" color="white" height={10}></Loader>
              ) : (
                "Remove"
              )}
            </Button>
          </div>
        </header>
      </div>
      <div className="slds-card__body slds-card__body_inner">{book.author}</div>
    </article>
  );
};

export default BookItem;
