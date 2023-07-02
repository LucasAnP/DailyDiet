import { Circle } from "phosphor-react-native";
import { css, styled } from "styled-components/native";

interface CircleProps {
  insideDiet?: boolean;
}

export const Container = styled.View`
  padding: 14px 16px 14px 12px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  margin: 8px 0;
  align-items: center;
`;

export const TimeContainer = styled.View`
  padding-right: 12px;

  margin-right: 12px;

  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.regular}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.medium}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const CircleIcon = styled(Circle).attrs<CircleProps>(
  ({ theme, insideDiet }) => ({
    size: 24,
    weight: "fill",
    color: insideDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  })
)``;
