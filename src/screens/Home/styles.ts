import { ArrowUpRight } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type PercentProps = {
  negative?: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Percent = styled.TouchableOpacity<PercentProps>`
  width: 100%;

  background-color: ${({ theme, negative = false }) =>
    negative ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};

  margin-top: 32px;
  padding: 20px 16px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const ClickIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
}))`
  right: 8px;
  top: 8px;
  position: absolute;
`;

export const PercentTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xLarge}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const PercentSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.xRegular}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.medium}px;
    color: ${theme.COLORS.GRAY_100};
  `};

  margin-bottom: 8px;
`;

export const SectionHeaderTitle = styled.Text`
  margin-top: 32px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xMedium}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Meals = styled.View`
  flex: 1;

  margin-top: 40px;
`;
