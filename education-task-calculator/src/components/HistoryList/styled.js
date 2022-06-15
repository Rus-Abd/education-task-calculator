import styled from 'styled-components';

export const HistoryLogValues = styled.ul`
  height: 500px;
  overflow: ${(props) => (props.length < 7 ? 'hidden' : 'scroll')};
  margin-left: 53px;
  margin-top: 50px;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
export const HistoryLogItem = styled.li`
  margin-bottom: 20px;
  margin-left: 53px;
  font-size: 32px;
  max-width: 200px;
`;
