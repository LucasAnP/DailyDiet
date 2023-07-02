import { css, styled } from "styled-components/native";

export const Container = styled.View`
  padding: 14px 16px 14px 12px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Date = styled.Text`
  ${({ theme }) => css``}
`;
