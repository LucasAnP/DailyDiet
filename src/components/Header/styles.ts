import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
}))``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xMedium}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const HeaderPos = styled.View`
  flex: 1;
`;
