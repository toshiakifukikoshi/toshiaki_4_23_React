import style from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;

  return (
    <>
      <SButton>{children}</SButton>
    </>
  );
};

const SButton = style(BaseButton)`

`;
