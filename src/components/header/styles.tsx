import styled from "styled-components";

export const VerticalBar = styled.div`
  border-left: 3px solid #ededed;
`;

export const Title = styled.div`
  padding: 10px;
  h3 {
  }
`;
export const Header = styled.div`
  display: flex;
  height: 70px;
  padding-top: 10px;
  svg {
    height: 100%;
    width: 100%;
    padding: 10px;
  }
`;
export const HRStyle = styled.hr`
  position: relative;
  top: -10px;
  color: #ededed;
`;

export const Samsys = styled.div`
  width: 100%;
  h2 {
    letter-spacing: 7vw;
    text-align: center;
  }
  h5 {
    text-align: end;
    padding-right: 45px;
  }

  line-height: 0.1px;
`;
