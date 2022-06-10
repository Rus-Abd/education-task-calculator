import styled from 'styled-components';

export const SHeader = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(theme) => theme.backGround};
  color: ${(theme) => theme.color};
`;
export const SHeaderTitle = styled.h1`
  margin-left: 32px;
  font-size: 32px;
`;
export const Navigation = styled.ul`
  list-style: none;
  display: flex;
`;
export const NavLink = styled.li`
  margin-right: 32px;
  opacity: 0.7;
  transition: 0.7s all;
  &:hover {
    opacity: 1;
    text-decoration: underline;
    text-underline-offset: 10px;
  }
`;
