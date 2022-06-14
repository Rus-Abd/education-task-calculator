import styled from 'styled-components';

export const Button = styled.button`
  width: 150px;
  height: 150px;
  background: ${(theme) => theme.backGround} 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 32px;
  font-size: 64px;
  letter-spacing: 0px;
  color: ${(theme) => theme.color};
  cursor: pointer;
  @media screen and (max-width: 1900px) {
    width: 100px;
    height: 100px;
    font-size: 44px;
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 45px;
  grid-column-gap: 128px;
  margin-top: 28px;
  margin-left: 130px;
  margin-right: 150px;
  @media screen and (max-width: 1900px) {
    grid-row-gap: 30px;
    grid-column-gap: 0px;
  }
`;
