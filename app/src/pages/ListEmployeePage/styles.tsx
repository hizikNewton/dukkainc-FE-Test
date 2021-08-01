import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgb(128 128 128 / 20%);
`;

export const ThumbNail = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;
export const Detail = styled.div`
  border-radius: 4px;
  word-wrap: anywhere;
  li {
    list-style-type: none;
    color: rgb(128, 128, 128);
  }
  li:first-child {
    font-size: 24px;
    color: black;
  }
`;

export const Icons = styled.div`
  display: none;
  position: relative;
  justify-content: flex-end;
  flex-wrap: nowrap;
  svg {
    background-color: gray;
    margin: 1px;
    padding: 5px;
  }
`;
