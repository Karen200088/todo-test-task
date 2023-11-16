import { FC } from "react";

import {Spinner , Loader} from "./Loading.styled";

export const Loading: FC = () => {
  return (
    <Loader>
      <Spinner />
    </Loader>
  );
};