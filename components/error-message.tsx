import { FC } from "react";
import "twin.macro";

const ErrorMessage: FC<{ message: string }> = ({ message }) => (
  <p tw="text-red text-xs pt-1" role="alert">
    {message}
  </p>
);

export default ErrorMessage;
