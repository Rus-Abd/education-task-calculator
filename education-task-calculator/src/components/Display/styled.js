import styled from 'styled-components';

export const DisplayLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(theme) => theme.color};
`;
export const DisplayValue = styled.span`
  max-width: 700px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  font-size: 64px;
  padding-right: 47px;
  margin-left: 80px;
`;
export const Container = styled.div`
  margin-left: 42px;
  margin-top: 56px;
`;
