import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const HeaderContainer = styled.View`
  padding: 24px 24px 34px 24px;

  flex-direction: row;
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

export const InputLabel = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xRegular}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const InputName = styled.TextInput`
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  margin-bottom: 24px;
`;

export const Description = styled.TextInput`
  width: 100%;
  min-height: 142px;
  max-height: 142px;
  padding: 14px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Date = styled.TextInput`
  width: 100%;
  padding: 14px;
  margin-right: 20px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Time = styled.TextInput`
  width: 100%;
  padding: 14px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Row = styled.View`
  flex-direction: row;

  margin: 24px 0;
`;

export const InputColumn = styled.View`
  flex: 1;
`;

export const Buttons = styled.View`
  flex-direction: row;
  gap: 8px;
`;
