import { css, styled } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;

  padding: 16px 24px;
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xRegular}px;
    color: ${theme.COLORS.WHITE};
  `}
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  margin-right: ${({ theme }) => theme.FONT_SIZE.regular}px;
`;
