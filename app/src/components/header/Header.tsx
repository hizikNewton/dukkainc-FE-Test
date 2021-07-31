import React from "react";
import { Menu } from "../../assets/icons";
import { VerticalBar } from "./styles";

interface Props {}

export const Header = (props: Props) => {
  return (
    <div>
      <Menu />
      <VerticalBar />
      <div>
        <h2>{"SAMASYS"}</h2>
        <h5>{"combat salary fraud"}</h5>
      </div>
    </div>
  );
};
