import React from "react";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { Title, VerticalBar } from "./styles";

interface Props {
  title?: string;
}

export const Header = ({ title }: Props) => {
  return (
    <>
      <div>
        <Menu />
        <VerticalBar />
        <div>
          <h2>{"SAMASYS"}</h2>
          <h5>{"combat salary fraud"}</h5>
        </div>
      </div>
      <Title>{title}</Title>
    </>
  );
};
