import { Circle } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface CircleProps {
  insideDiet?: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const HeaderContainer = styled.View`
  padding: 24px 24px 34px 24px;

  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  padding: 0 24px;
  padding-top: 40px;

  align-items: flex-start;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.middle}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Description = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.medium}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const TimeTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xRegular}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const InsideDietTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.xRegular}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const InsideContainer = styled.View`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 9999px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const CircleIcon = styled(Circle).attrs<CircleProps>(
  ({ theme, insideDiet }) => ({
    size: 8,
    weight: "fill",
    color: insideDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;
