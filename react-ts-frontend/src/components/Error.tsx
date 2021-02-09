import { Alert, Icon } from "@salesforce/design-system-react";
import React from "react";

export interface ErrorProps {
  message: any;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <>
      {console.log(message?.message)}
      <Alert
        icon={<Icon category="utility" name="error" />}
        labels={{
          heading: message?.message as string,
        }}
        variant="error"
      />
    </>
  );
};

export default Error;
