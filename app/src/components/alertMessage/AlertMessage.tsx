import React from "react";
import * as S from "./styles";
import { IProps } from "./types";
import { ReactComponent as Close } from "../../assets/icons/window-close.svg";
export const AlertMessage: React.FC<IProps> = ({
  title,
  status = "neutral",
  children,
  onClick,
  actionText,
}: IProps) => {
  const isAction = !!actionText;

  return (
    <S.Wrapper status={status}>
      <S.TopWrapper>
        <S.Title>{title}</S.Title>
        {isAction ? (
          !children && (
            <S.ActionButton onClick={onClick}>{actionText}</S.ActionButton>
          )
        ) : (
          <S.CloseButton onClick={onClick}>
            <Close />
          </S.CloseButton>
        )}
      </S.TopWrapper>
      {children && <S.Content>{children}</S.Content>}
      {children && isAction && (
        <S.ActionButton onClick={onClick} style={{ marginTop: "1rem" }}>
          {actionText}
        </S.ActionButton>
      )}
    </S.Wrapper>
  );
};
