import styled from "styled-components";
import { IProps } from "./types";


export const Wrapper = styled.div<{ status: IProps["status"] }>`
  width: ${props => props.theme.message.width};
  padding: ${props => props.theme.message.padding};
  background-color: ${props => props.theme.message.backgroundColor};
  position: fixed;
  top: ${props => props.theme.spacing.spacer};
  right: ${props => props.theme.spacing.spacer};
  border:1px solid #93ECC1;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  text-transform: ${props => props.theme.message.titleTransform};
  font-weight: ${props => props.theme.message.titleWeight};
  letter-spacing: ${props => props.theme.message.letterSpacing};
  margin: ${props => props.theme.message.titleMargin};
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: 0px;
`;

export const Content = styled.div`
  margin: ${props => props.theme.message.contentMargin};
`;

export const ActionButton = styled.button`
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  font-size: ${props => props.theme.typography.baseFontSize};
  text-decoration: underline;
`;
