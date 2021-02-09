import React from "react";
import { Field, Form } from "react-final-form";
import { Button, Input } from "@salesforce/design-system-react";
import Loader from "react-loader-spinner";

export interface BookFormProps {
  initialValues?: BookType | undefined;
  onFormSubmit: (data: BookType) => Promise<void>;
  isLoading: boolean;
}

const BookForm: React.FC<BookFormProps> = ({
  initialValues,
  onFormSubmit,
  isLoading,
}) => {
  return (
    <div className="slds-theme_default slds-p-bottom_large">
      <Form
        onSubmit={(data: BookType) => {
          onFormSubmit(data);
        }}
        initialValues={initialValues}
        render={({ handleSubmit, values, submitting }) => (
          <form className="slds-form" onSubmit={handleSubmit}>
            <div className="slds-form-element__row slds-align_absolute-center">
              <div className="slds-size_1-of-2 slds-medium-size_1-of-4">
                <Field name="title">
                  {({ input, meta }) => (
                    <Input
                      id="title"
                      errorText={meta.error}
                      label="Title"
                      {...input}
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className="slds-form-element__row slds-align_absolute-center">
              <div className="slds-size_1-of-2 slds-medium-size_1-of-4">
                <Field name="author">
                  {({ input, meta }) => (
                    <Input
                      id="author"
                      errorText={meta.error}
                      label="Author"
                      {...input}
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className="slds-form-element__row slds-align_absolute-center slds-p-top_large">
              <div className="slds-size_1-of-2 slds-medium-size_1-of-4">
                <Button type="submit" variant="success">
                  {isLoading ? (
                    <Loader type="ThreeDots" color="#fff" height={10} />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default BookForm;
