import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type SuccessProps = {
  fail?: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`;

export const Title = styled.Text<SuccessProps>`
  margin-bottom: 8px;
  ${({ theme, fail = false }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.large}px;
    color: ${!fail ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const Subtitle = styled.Text`
  margin-bottom: 40px;
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.medium}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
