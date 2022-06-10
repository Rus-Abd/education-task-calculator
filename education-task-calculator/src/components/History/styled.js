import styled from 'styled-components';

export const HistoryLine = styled.div`
  width: 2px;
  height: 910px;
  background-color: ${(props) => props.theme.background || 'black'};
`;
export const Container = styled.div`
  margin-left: 23px;
  margin-top: 23px;
  display: flex;
`;
export const HistoryLog = styled.div``;
export const HistoryLogTitle = styled.span`
  font-size: 32px;
  margin-left: 160px;
`;
export const HistoryLogValues = styled.ul`
  margin-left: 53px;
  margin-top: 50px;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
