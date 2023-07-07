import { css, styled } from "styled-components/native";
import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";

type ButtonProps = {
  filled: boolean;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  min-height: 50px;
  max-height: 50px;

  ${({ theme, filled }) =>
    !filled
      ? css`
          border: 1px solid ${theme.COLORS.GRAY_100};
          background-color: ${({ theme }) => theme.COLORS.WHITE};
        `
      : css`
          background-color: ${({ theme }) => theme.COLORS.GRAY_200};
        `}
  border-radius: 6px;

  padding: 16px 24px;
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const Text = styled.Text<ButtonProps>`
  ${({ theme, filled }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xRegular}px;
    color: ${!filled ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
  `}
`;

export const Icon = styled(Plus).attrs<ButtonProps>(({ theme, filled }) => ({
  size: 18,
  color: filled ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
}))`
  margin-right: ${({ theme }) => theme.FONT_SIZE.regular}px;
`;

export const EditIcon = styled(PencilSimpleLine).attrs<ButtonProps>(
  ({ theme, filled }) => ({
    size: 18,
    color: filled ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
  })
)`
  margin-right: ${({ theme }) => theme.FONT_SIZE.regular}px;
`;

export const DeleteIcon = styled(Trash).attrs<ButtonProps>(
  ({ theme, filled }) => ({
    size: 18,
    color: filled ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
  })
)`
  margin-right: ${({ theme }) => theme.FONT_SIZE.regular}px;
`;
