import { Link, NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components"


export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 1.7rem 0;
  color: #f5f2f7;
  background: linear-gradient(180deg, rgba(22, 18, 40, 0.74), rgba(22, 18, 40, 0));
  backdrop-filter: blur(14px);
`;

export const Inner = styled.div`
  width: min(100%, 1200px);
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;


export const BrandText = styled.span`
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  letter-spacing: -0.04em;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(0.45rem, 1vw, 1rem);

  @media (max-width: 900px) {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const NavLink = styled(RouterNavLink)`
  font-size: clamp(0.76rem, 0.88vw, 0.92rem);
  padding: 0.24rem 0.72rem;
  border-radius: 999px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: -0.02em;
  opacity: 0.72;
  transition: opacity 0.2s ease, background-color 0.2s ease, color 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
    background: #f6f3f7;
    color: #2a2441;
  }
`;
