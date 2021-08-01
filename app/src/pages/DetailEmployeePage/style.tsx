import styled from "styled-components";

export const Calendar = styled.div`
  display: inline-grid;
  width: 75px;
  height: 75px;
  background-color: #ededed;
  justify-content: center;
`;
export const Money = styled.div`
  hr {
    width: 100%;
    color: #ededed;
  }
`;

export const LoanItem = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgb(128 128 128 / 20%);
  margin: 20px;
`;

export const Amount = styled.div`
  margin: 10px;
`;

export const HRule = styled.div`
  display: flex;
`;
