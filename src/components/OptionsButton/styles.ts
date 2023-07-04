import { Circle } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface CircleProps {
  insideDiet?: boolean;
}

interface ButtonProps {
  isSelected: boolean;
  insideDiet?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  flex: 1;

  padding: 16px;

  gap: 8px;
  background-color: ${({ theme, isSelected, insideDiet }) =>
    isSelected
      ? insideDiet
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};

  border-color: ${({ theme, isSelected, insideDiet }) =>
    isSelected
      ? insideDiet
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK
      : "transparent"};
  border-width: 1px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xRegular}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const CircleIcon = styled(Circle).attrs<CircleProps>(
  ({ theme, insideDiet }) => ({
    size: 8,
    weight: "fill",
    color: insideDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;
