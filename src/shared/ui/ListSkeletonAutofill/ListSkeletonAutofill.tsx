import type { ReactElement } from "react";
import React from "react";

interface ListSkeletonAutofillProps {
  skeleton: ReactElement;
  count?: number;
}

const ListSkeletonAutofill = ({
  skeleton,
  count = 4,
}: ListSkeletonAutofillProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) =>
        React.cloneElement(skeleton, { key: index }),
      )}
    </>
  );
};

export default ListSkeletonAutofill;
