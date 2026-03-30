import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Hero = styled.section`
  position: relative;
  min-height: 74dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8.5rem 2rem 6rem;
  background: ${({ theme }) => theme.hero.gradient};
  color: ${({ theme }) => theme.colors.heroText};
`;

export const HeroInner = styled.div`
  width: min(100%, 1200px);
  margin: 0 auto;
`;

export const HeroTitle = styled.h2`
  max-width: 52rem;
  font-size: clamp(2.8rem, 6vw, 5.3rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`;

export const HeroText = styled.p`
  max-width: 36rem;
  margin-top: 1.5rem;
  font-size: clamp(1rem, 1.55vw, 1.3rem);
  opacity: 0.92;
`;

export const CTAGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

export const PrimaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 13rem;
  padding: 0.95rem 1.45rem;
  border: 2px solid rgba(255, 255, 255, 0.88);
  border-radius: 0.8rem;
  color: #f6f3f7;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 0.95rem;
`;
