import React from "react";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import * as S from "./styles";

interface Props {
  title?: string;
}

export const Header = ({ title }: Props) => {
  return (
    <>
      <S.Header>
        <Menu />
        <S.VerticalBar />
        <S.Samsys>
          <h2>{"SAMASYS"}</h2>
          <h5>{"combat salary fraud"}</h5>
        </S.Samsys>
      </S.Header>
      <S.HRStyle />
      <S.Title>{title}</S.Title>
    </>
  );
};
