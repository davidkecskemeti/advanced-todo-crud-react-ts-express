import { Spinner } from "@salesforce/design-system-react";
import React from "react";

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div style={{ position: "relative", height: "5rem" }}>
      <Spinner size="medium" variant="base" />
    </div>
  );
};

export default Loader;
