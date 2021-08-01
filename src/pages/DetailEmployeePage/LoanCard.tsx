import React from "react";
import * as S from "./style";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";

interface Props {
  month: string;
  borrowed: number;
  received: number;
}

const LoanCard = ({ month, borrowed, received }: Props) => {
  return (
    <S.LoanItem>
      <S.Calendar>
        <CalendarIcon />
        {month}
      </S.Calendar>
      <S.Money>
        <S.Amount>{`Borrowed: ${borrowed}`}</S.Amount>
        <hr />
        <S.Amount>{`Receivable: ${received}`}</S.Amount>
      </S.Money>
    </S.LoanItem>
  );
};

export default LoanCard;
