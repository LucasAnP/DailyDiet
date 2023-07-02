import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const HeaderContainer = styled.View`
  padding: 24px 24px 34px 24px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  padding: 0 24px;
  padding-top: 32px;

  align-items: center;
`;

export const Title = styled.Text`
  margin-bottom: 24px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.xRegular}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Sequence = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  margin-bottom: 12px;
`;

export const Total = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Info = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 12px;
`;

export const Success = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  margin-right: 12px;
  padding: 16px;

  border-radius: 8px;
`;

export const Fail = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};

  padding: 16px;
  border-radius: 8px;
`;
